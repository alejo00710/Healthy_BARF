import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const obtenerMovimientos = async () => {
  return await prisma.movimientoStock.findMany({
    include: {
      producto: true,
      materiaPrima: true,
    },
    orderBy: {
      creadoEn: 'desc',
    },
  });
};
