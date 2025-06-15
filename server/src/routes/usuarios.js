import express from 'express';
import { listarUsuarios, eliminarUsuario, actualizarPerfil, actualizarUsuarioPorAdmin } from '../controllers/usuarioController.js';
import { verificarToken, verificarAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', verificarToken, verificarAdmin, listarUsuarios);
router.delete('/:id', verificarToken, verificarAdmin, eliminarUsuario);
router.put('/perfil/', verificarToken, actualizarPerfil);
router.put('/:id', verificarToken, verificarAdmin, actualizarUsuarioPorAdmin);


export default router;