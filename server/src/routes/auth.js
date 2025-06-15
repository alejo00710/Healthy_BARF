import express from 'express';
import { registrarUsuario, loginUsuario } from '../controllers/authController.js';
import { verificarToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/registro', registrarUsuario);
router.post('/login', loginUsuario);

router.get('/perfil', verificarToken, (req, res) => {
    res.json({ mensaje: 'Ruta protegida', usuario: req.usuario });
  });

export default router;
