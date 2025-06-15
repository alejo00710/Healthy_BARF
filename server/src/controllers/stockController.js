import { obtenerMovimientos } from '../services/stockService.js';

export const listarMovimientos = async (req, res) => {
  try {
    const movimientos = await obtenerMovimientos();
    res.json(movimientos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
