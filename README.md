
# 🐾 **Healthy Backend**

**Healthy Backend** es la API que da soporte a **Healthy Barf**, un e-commerce especializado en productos naturales para perros. Este backend maneja la autenticación, gestión de productos y funcionalidades clave del sistema.

Está construido con **Node.js**, **Prisma ORM** y usa **JWT** para la autenticación, siguiendo una arquitectura pensada para escalar y mantenerse fácilmente.

---

## 🚀 Tecnologías utilizadas

- ⚙️ **Node.js**
- 🧭 **Express.js**
- 🧬 **Prisma ORM**
- 🗃️ **MySQL** (adaptable a otros motores compatibles)
- 🔐 **JWT** (autenticación segura)
- 🧪 **dotenv** (variables de entorno)
- 📦 **npm** (gestión de dependencias)

---

## 📁 Estructura del proyecto

```
/src
├── controllers     # Lógica de controladores
├── middlewares     # Middlewares personalizados
├── prisma          # Cliente de Prisma y esquemas
├── routes          # Rutas de la API
├── services        # Lógica de negocio
├── utils           # Funciones auxiliares
└── index.js        # Punto de entrada principal
```

---

## ⚙️ Configuración e instalación

1. **Clonar el repositorio**

```bash
cd server
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno**

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
DATABASE_URL="mysql://root:contraseña@localhost:3306/healthy_bd"
JWT_SECRET="clave_secreta_segura"
PORT=4000
```

4. **Configurar la base de datos**

En MySQL, crea la base de datos:

```sql
CREATE DATABASE healthy_bd;
USE healthy_bd;
```

Luego en terminal:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

5. **Ejecutar el servidor en modo desarrollo**

```bash
npm run dev
```
corre en el puerto para ver la documentacion del swagger: http://localhost:3000/api-docs
---

## 🛣️ Endpoints principales

### 🔐 Auth – Autenticación

| Método | Ruta              | Descripción           |
|--------|-------------------|-----------------------|
| POST   | `/auth/registro`  | Registrar usuario     |
| POST   | `/auth/login`     | Iniciar sesión        |

### 👤 Usuario

| Método | Ruta               | Descripción                            |
|--------|--------------------|----------------------------------------|
| GET    | `/usuario/perfil`  | Obtener perfil del usuario autenticado |
| GET    | `/user`            | Obtener todos los usuarios             |
| DELETE | `/user/{id}`       | Eliminar un usuario                    |
| PUT    | `/user/perfil/{id}`     | Actualizar perfil del usuario          |

### 🛒 Producto (solo admin)

| Método | Ruta                            | Descripción          |
|--------|----------------------------------|----------------------|
| POST   | `/producto/crear`               | Crear producto       |
| GET    | `/producto/listar`              | Listar productos     |
| PUT    | `/producto/actualizar/{id}`     | Actualizar producto  |
| DELETE | `/producto/eliminar/{id}`       | Eliminar producto    |

---

## 🔒 Seguridad

- Contraseñas cifradas con **bcrypt**
- Tokens **JWT** firmados y verificados
- Rutas protegidas por middleware de autenticación
- Acceso restringido a admins en operaciones sensibles

---

## ✅ Pendientes

- [x] Autenticación y registro  
- [ ] Gestión de pedidos  
- [ ] Sistema de favoritos  
- [ ] Gestión de stock y categorías  
