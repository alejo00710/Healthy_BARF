// src/routes/pedido.js
import express from 'express';
import * as pedidoController from '../controllers/pedidoController.js';
import { verificarToken, verificarAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', verificarToken, pedidoController.crearPedido);
router.get('/usuario/:usuarioId', verificarToken, pedidoController.obtenerPedidosPorUsuario);
router.get('/', verificarToken, verificarAdmin, pedidoController.obtenerTodosLosPedidos);
router.put('/:id/estado', verificarToken, verificarAdmin, pedidoController.cambiarEstadoPedido);
// NUEVA RUTA
router.get('/mis-pedidos', verificarToken, pedidoController.obtenerMisPedidos);
export default router; // <-- esto es lo importante
