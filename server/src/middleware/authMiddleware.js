// middlewares/authMiddleware.js
import jwt from 'jsonwebtoken';

export const verificarToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ mensaje: 'Token no proporcionado' });

  const token = authHeader.split(' ')[1];

  try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.usuario = decoded; 
      next();
  } catch (err) {
      return res.status(401).json({ mensaje: 'Token inválido' });
  }
};

export const verificarAdmin = (req, res, next) => {
  if (req.usuario.rol !== 'ADMIN') {
    return res.status(403).json({ mensaje: 'Acceso denegado, solo admins' });
  }
  next();
};