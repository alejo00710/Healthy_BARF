//LISTAR USUARIO
import prisma from '../config/prisma.js';
import bcrypt from 'bcryptjs';

export const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany({
      select: { id: true, nombre: true, correo: true, rol: true, creadoEn: true }
    });
    res.json(usuarios);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: 'Error al obtener usuarios' });
  }
};

//ELIMINAR USUARIO
export const eliminarUsuario = async (req, res) => {
    const { id } = req.params;
    try {
      await prisma.usuario.delete({ where: { id: parseInt(id) } });
      res.json({ mensaje: 'Usuario eliminado correctamente' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ mensaje: 'Error al eliminar usuario' });
    }
  };

  // ACTUALIZAR USUARIO 

export const actualizarPerfil = async (req, res) => {
  const { nombre, correo, contrasena } = req.body;
  const { id } = req.usuario;

  try {
    const data = {};

    if (nombre) data.nombre = nombre;
    if (correo) data.correo = correo;
    if (contrasena) {
      data.contrasena = await bcrypt.hash(contrasena, 10);
    }

    if (Object.keys(data).length === 0) {
      return res.status(400).json({ mensaje: 'No hay datos para actualizar' });
    }

    const usuarioActualizado = await prisma.usuario.update({
      where: { id },
      data,
      select: { id: true, nombre: true, correo: true }
    });

    res.json({ mensaje: 'Perfil actualizado', usuario: usuarioActualizado });
  } catch (err) {
    console.error(err);

    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === 'P2002' && err.meta?.target?.includes('correo')) {
        return res.status(400).json({ mensaje: 'El correo ya está en uso por otro usuario' });
      }
      if (err.code === 'P2025') {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
    }

    res.status(500).json({ mensaje: 'Error al actualizar perfil' });
  }
};

export const actualizarUsuarioPorAdmin = async (req, res) => {
  const { id } = req.params;
  const { nombre, correo, rol, contrasena } = req.body;

  try {
    const data = { nombre, correo, rol };
    
    if (contrasena) {
      data.contrasena = await bcrypt.hash(contrasena, 10);
    }

    const usuarioActualizado = await prisma.usuario.update({
      where: { id: Number(id) },
      data,
      select: {
        id: true,
        nombre: true,
        correo: true,
        rol: true
      }
    });

    res.json({ mensaje: 'Usuario actualizado correctamente', usuario: usuarioActualizado });
  } catch (err) {
    console.error(err);

    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === 'P2002' && err.meta?.target?.includes('correo')) {
        return res.status(400).json({ mensaje: 'El correo ya está en uso por otro usuario' });
      }
      if (err.code === 'P2025') {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
    }

    res.status(500).json({ mensaje: 'Error al actualizar usuario' });
  }
};


  