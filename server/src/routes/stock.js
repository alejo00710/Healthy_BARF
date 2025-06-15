import express from 'express';
import { listarMovimientos } from '../controllers/stockController.js';
import { verificarToken, verificarAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', verificarToken, verificarAdmin, listarMovimientos);

export default router;
