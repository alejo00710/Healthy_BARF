import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import productoRoutes from './routes/producto.js';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';
import { fileURLToPath } from 'url';
import usuarioRoutes from './routes/usuarios.js';
import favoritosRoutes from './routes/favoritos.js';
import pedidoRoutes from './routes/pedido.js';
import movimientoStockRoutes from './routes/stock.js';
import cors from 'cors';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerDocument = YAML.load(path.join(__dirname, '../docs/swagger.yaml'));

const app = express();
app.use(express.json());
dotenv.config();

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true 
  }));
  
app.use('/uploads', express.static('uploads'));

//aqui se agregan las rutas 
app.use('/auth', authRoutes);
app.use('/usuario', authRoutes);
app.use('/producto', productoRoutes);
app.use('/user', usuarioRoutes); //para llamar todos los usuarios
app.use(favoritosRoutes);
app.use('/pedido', pedidoRoutes);
app.use('/stock', movimientoStockRoutes);


// Ruta para documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;