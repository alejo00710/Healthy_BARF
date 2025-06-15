/**Este Script es para los permisos del administrador */
export const esAdmin = (req, res, next) => {
    if (req.usuario?.rol !== 'ADMIN') {
      return res.status(403).json({ mensaje: 'Acceso denegado: se requiere rol de administrador' });
    }
    next();
  };
  