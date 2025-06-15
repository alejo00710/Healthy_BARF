// routes/favoritos.js
import express from 'express';
import {
    obtenerFavoritos,
    agregarFavorito,
    eliminarFavorito
} from '../controllers/favoritosController.js';
import { verificarToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/perfil/:id/favoritos', verificarToken, obtenerFavoritos);
router.post('/favoritos', verificarToken, agregarFavorito);
router.delete('/favoritos/:productoId', verificarToken, eliminarFavorito);

export default router;
