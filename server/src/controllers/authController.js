import prisma from '../config/prisma.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const generarToken = (usuario) => {
  return jwt.sign(
    { id: usuario.id, correo: usuario.correo, rol: usuario.rol },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};

export const registrarUsuario = async (req, res) => {
  const { nombre, correo, contrasena, rol } = req.body;

  try {
    const existe = await prisma.usuario.findUnique({ where: { correo } });
    if (existe) return res.status(400).json({ mensaje: 'Correo ya registrado' });

    const hash = await bcrypt.hash(contrasena, 10);
    const nuevoUsuario = await prisma.usuario.create({
      data: { nombre, correo, contrasena: hash, rol }
    });

    const token = generarToken(nuevoUsuario);
    res.json({ usuario: { id: nuevoUsuario.id, nombre, correo, rol }, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: 'Error al registrar usuario' });
  }
};

export const loginUsuario = async (req, res) => {
  const { correo, contrasena } = req.body;

  try {
    const usuario = await prisma.usuario.findUnique({ where: { correo } });
    if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado' });

    const coincide = await bcrypt.compare(contrasena, usuario.contrasena);
    if (!coincide) return res.status(401).json({ mensaje: 'Contraseña incorrecta' });

    const token = generarToken(usuario);
    res.json({
  usuario: { id: usuario.id, nombre: usuario.nombre, correo: usuario.correo, rol: usuario.rol },
  token
});
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: 'Error en el login' });
  }
};
