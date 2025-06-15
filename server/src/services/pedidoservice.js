import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const crearPedido = async ({ usuarioId, direccion, items }) => {
  return await prisma.$transaction(async (tx) => {
    // 1. Verificar stock suficiente
    for (const item of items) {
      const producto = await tx.producto.findUnique({
        where: { id: item.productoId },
      });

      if (!producto) {
        throw new Error(`Producto con ID ${item.productoId} no encontrado.`);
      }

      if (producto.stock < item.cantidad) {
        throw new Error(`Stock insuficiente para ${producto.nombre}. Solo quedan ${producto.stock}.`);
      }
    }

    // 2. Calcular total
    const total = items.reduce((sum, item) => sum + item.precioUnitario * item.cantidad, 0);

    // 3. Crear el pedido y los ítems
    const nuevoPedido = await tx.pedido.create({
      data: {
        usuarioId,
        direccion,
        total,
        items: {
          create: items.map(item => ({
            productoId: item.productoId,
            cantidad: item.cantidad,
            precioUnitario: item.precioUnitario,
          })),
        },
      },
      include: { items: true },
    });

    // 4. Actualizar stock y registrar movimiento
    for (const item of items) {
      // Descontar stock
      await tx.producto.update({
        where: { id: item.productoId },
        data: {
          stock: { decrement: item.cantidad },
        },
      });

      // Registrar movimiento de SALIDA
      await tx.movimientoStock.create({
        data: {
          producto: {
            connect: { id: item.productoId } // 🔑 forma correcta de vincular el producto
          },
          tipo: 'SALIDA',
          cantidad: item.cantidad,
          nota: `Salida por pedido #${nuevoPedido.id}`,
        }
      });
    }

    return nuevoPedido;
  });
};

export const obtenerPedidosPorUsuario = async (usuarioId) => {
  return await prisma.pedido.findMany({
    where: { usuarioId },
    include: {
      items: {
        include: { producto: true },
      },
    },
  });
};

export const obtenerTodosLosPedidos = async () => {
  return await prisma.pedido.findMany({
    include: {
      usuario: true,
      items: {
        include: { producto: true },
      },
    },
  });
};

export const cambiarEstadoPedido = async (id, nuevoEstado) => {
  return await prisma.pedido.update({
    where: { id },
    data: { estado: nuevoEstado },
  });
};
