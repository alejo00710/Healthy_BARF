// src/controllers/pedidoController.js
import {
    crearPedido as crearPedidoService,
    obtenerPedidosPorUsuario as obtenerPedidosPorUsuarioService,
    obtenerTodosLosPedidos as obtenerTodosLosPedidosService,
    cambiarEstadoPedido as cambiarEstadoPedidoService
  } from '../services/pedidoservice.js';
  
  export const crearPedido = async (req, res) => {
    try {
      const nuevoPedido = await crearPedidoService(req.body);
      res.status(201).json(nuevoPedido);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  export const obtenerPedidosPorUsuario = async (req, res) => {
    try {
      const pedidos = await obtenerPedidosPorUsuarioService(+req.params.usuarioId);
      res.json(pedidos);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  export const obtenerTodosLosPedidos = async (req, res) => {
    try {
      const pedidos = await obtenerTodosLosPedidosService();
      res.json(pedidos);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // PENDIENTE | PAGADO | ENVIADO | ENTREGADO | CANCELADO
  export const cambiarEstadoPedido = async (req, res) => {
    try {
      const pedidoActualizado = await cambiarEstadoPedidoService(+req.params.id, req.body.estado);
      res.json(pedidoActualizado);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  