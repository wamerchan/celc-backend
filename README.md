# CELC Backend

Backend RESTful API para CELC construido con Node.js, Express.js y MySQL.

## 🚀 Características

- **Arquitectura RESTful**: API REST bien estructurada con endpoints claros
- **Autenticación JWT**: Sistema de autenticación seguro con JSON Web Tokens
- **Arquitectura en capas**: Código organizado en router, controller y model
- **CRUD completo**: Operaciones Crear, Leer, Actualizar, Borrar para todas las entidades
- **Async/Await**: Código asíncrono moderno y limpio
- **MySQL**: Base de datos relacional robusta con mysql2

## 📋 Requisitos Previos

- Node.js (v14 o superior)
- MySQL (v5.7 o superior)
- npm o yarn

## 🔧 Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/wamerchan/celc-backend.git
cd celc-backend
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
```bash
cp .env.example .env
```

Editar `.env` con tus credenciales:
```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_contraseña
DB_NAME=celc_db
DB_PORT=3306
JWT_SECRET=tu_secreto_jwt_aquí
JWT_EXPIRES_IN=24h
```

4. Crear la base de datos:
```bash
mysql -u root -p < database/schema.sql
```

## 🏃 Ejecución

### Desarrollo (con auto-reload):
```bash
npm run dev
```

### Producción:
```bash
npm start
```

El servidor se iniciará en `http://localhost:3000`

## 📚 Estructura del Proyecto

```
celc-backend/
├── src/
│   ├── config/          # Configuración (database)
│   ├── controllers/     # Controladores (lógica de negocio)
│   ├── middleware/      # Middleware (autenticación)
│   ├── models/          # Modelos (interacción con DB)
│   ├── routes/          # Rutas (endpoints)
│   ├── utils/           # Utilidades (JWT)
│   └── index.js         # Punto de entrada
├── database/
│   └── schema.sql       # Schema de la base de datos
├── .env.example         # Ejemplo de variables de entorno
└── package.json
```

## 🔐 API Endpoints

### Autenticación

#### Registro de Usuario
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "Juan Pérez",
  "email": "juan@example.com",
  "password": "password123",
  "role": "user"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "juan@example.com",
  "password": "password123"
}
```

Respuesta:
```json
{
  "message": "Login successful",
  "user": {
    "id": 1,
    "username": "Juan Pérez",
    "email": "juan@example.com",
    "role": "user"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Usuarios (Requiere JWT)

```http
GET    /api/users           # Obtener todos los usuarios
GET    /api/users/:id       # Obtener usuario por ID
PUT    /api/users/:id       # Actualizar usuario
DELETE /api/users/:id       # Eliminar usuario
```

### Líneas (Requiere JWT)

```http
POST   /api/lines           # Crear línea
GET    /api/lines           # Obtener todas las líneas
GET    /api/lines/:id       # Obtener línea por ID
PUT    /api/lines/:id       # Actualizar línea
DELETE /api/lines/:id       # Eliminar línea
```

#### Ejemplo - Crear Línea
```http
POST /api/lines
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Línea de Producción 1",
  "description": "Primera línea de producción",
  "status": "active"
}
```

### Equipos (Requiere JWT)

```http
POST   /api/equipment           # Crear equipo
GET    /api/equipment           # Obtener todos los equipos
GET    /api/equipment/:id       # Obtener equipo por ID
GET    /api/equipment/line/:lineId  # Obtener equipos por línea
PUT    /api/equipment/:id       # Actualizar equipo
DELETE /api/equipment/:id       # Eliminar equipo
```

#### Ejemplo - Crear Equipo
```http
POST /api/equipment
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Máquina Cortadora",
  "description": "Máquina de corte industrial",
  "line_id": 1,
  "status": "active",
  "serial_number": "MC-001"
}
```

## 🔑 Autenticación

Todas las rutas privadas requieren un token JWT en el header:
```http
Authorization: Bearer {tu_token_jwt}
```

El token se obtiene al hacer login o registro.

## 💾 Base de Datos

### Tabla: usuarios
- `id`: INT (Primary Key, Auto Increment)
- `username`: VARCHAR(100)
- `email`: VARCHAR(150) (Unique)
- `password`: VARCHAR(255) (Hashed)
- `role`: ENUM('admin', 'user')
- `created_at`: TIMESTAMP
- `updated_at`: TIMESTAMP

### Tabla: lineas
- `id`: INT (Primary Key, Auto Increment)
- `name`: VARCHAR(200)
- `description`: TEXT
- `status`: ENUM('active', 'inactive', 'maintenance')
- `created_at`: TIMESTAMP
- `updated_at`: TIMESTAMP

### Tabla: equipos
- `id`: INT (Primary Key, Auto Increment)
- `name`: VARCHAR(200)
- `description`: TEXT
- `line_id`: INT (Foreign Key)
- `status`: ENUM('active', 'inactive', 'maintenance', 'repair')
- `serial_number`: VARCHAR(100)
- `created_at`: TIMESTAMP
- `updated_at`: TIMESTAMP

## 🔒 Seguridad

- Contraseñas hasheadas con bcrypt
- JWT para autenticación stateless
- Variables de entorno para datos sensibles
- Validación de entrada en todos los endpoints

## 🛠️ Tecnologías

- **Node.js**: Runtime de JavaScript
- **Express.js**: Framework web
- **MySQL**: Base de datos
- **mysql2**: Driver de MySQL con soporte para promises
- **jsonwebtoken**: Autenticación JWT
- **bcryptjs**: Hash de contraseñas
- **dotenv**: Variables de entorno
- **cors**: Cross-Origin Resource Sharing

## 📝 Notas

- Usuario admin de prueba: `admin@celc.com` / `admin123`
- La base de datos incluye datos de ejemplo (ver `database/schema.sql`)
- Todos los endpoints están protegidos excepto `/api/auth/login` y `/api/auth/register`

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request.

## 📄 Licencia

ISC
