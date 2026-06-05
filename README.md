# CELC Backend — API REST de Gestión de Telecomunicaciones

API RESTful para el **Sistema de Control de Equipos y Líneas de Comunicación (CELC)**, construida con **NestJS 11**, **Prisma ORM** y **MariaDB**.

---

## 📋 Descripción

Backend modular que expone una API REST para la gestión integral de líneas celulares, equipos terminales, asignaciones a usuarios, revisiones técnicas, reportes y métricas. Incluye autenticación JWT con control de roles, documentación Swagger/OpenAPI, rate limiting y seguridad reforzada con Helmet.

### Funcionalidades principales

- 👤 Gestión de usuarios con roles (Administrador, Técnico, Empleado)
- 📱 CRUD de líneas telefónicas con cambio de estado
- 🔧 CRUD de equipos terminales
- 📋 Asignación de equipos/líneas a usuarios
- 🔍 Revisiones y mantenimiento de equipos
- 📊 Dashboard con métricas en tiempo real
- 📈 Reportes exportables
- 🔐 Autenticación JWT + guards de roles
- 📖 Documentación interactiva Swagger en `/api`

---

## 🛠️ Stack Tecnológico

| Categoría            | Tecnología                        | Versión |
| -------------------- | --------------------------------- | ------- |
| **Runtime**          | Node.js                           | ≥18     |
| **Lenguaje**         | TypeScript                        | ~5.7    |
| **Framework**        | NestJS                            | ^11.0   |
| **ORM**              | Prisma                            | ^7.8    |
| **Base de datos**    | MariaDB (via `@prisma/adapter-mariadb`) | — |
| **Autenticación**    | Passport + JWT + bcrypt           | —       |
| **Documentación**    | Swagger / OpenAPI (`@nestjs/swagger`) | ^11.2 |
| **Seguridad**        | Helmet + CORS + Throttler         | —       |
| **Validación**       | class-validator + class-transformer | —     |
| **Configuración**    | @nestjs/config + dotenv           | —       |
| **Testing**          | Jest + Supertest + ts-jest        | —       |
| **Gestor paquetes**  | pnpm                              | —       |

---

## 📁 Estructura del Proyecto

```
celc-backend/
├── prisma/
│   └── schema.prisma             # Schema BD: 7 modelos + 3 enums
│
├── src/
│   ├── main.ts                   # Bootstrap: Swagger, CORS, Helmet, ValidationPipe
│   ├── app.module.ts             # Módulo raíz (importa todos los módulos)
│   ├── app.controller.ts         # Health check /
│   ├── app.service.ts            # Servicio raíz
│   │
│   ├── auth/                     # Autenticación y autorización
│   │   ├── auth.module.ts
│   │   ├── auth.controller.ts    # POST /api/auth/login, /register, /verify
│   │   ├── auth.service.ts       # register, login, getProfile
│   │   ├── auth.dto.ts           # RegisterDto, LoginDto
│   │   ├── jwt.guard.ts          # Guard: valida token JWT
│   │   ├── jwt.middleware.ts     # Middleware JWT (alternativa)
│   │   ├── role.guard.ts         # Guard: verifica rol (Admin/Técnico/Empleado)
│   │   └── user.interface.ts     # Interface del payload JWT
│   │
│   ├── usuarios/                 # CRUD de usuarios
│   ├── lineas/                   # CRUD + toggle de líneas
│   ├── equipos/                  # CRUD de equipos
│   ├── asignaciones/             # CRUD de asignaciones
│   ├── revisiones/               # CRUD de revisiones
│   ├── reportes/                 # Reportes con filtros
│   ├── metricas/                 # Métricas para dashboard
│   ├── database/                 # DatabaseModule + DatabaseService (Prisma)
│   └── common/                   # Filtro global de excepciones
│
├── test/                         # Tests E2E
├── docs/                         # Documentación adicional
├── .env                          # Variables de entorno
├── package.json
├── pnpm-workspace.yaml
├── tsconfig.json
├── eslint.config.mjs
└── README.md
```

---

## 🚀 Instalación y Uso

### Requisitos

- Node.js 18+
- pnpm 8+
- MariaDB 10.6+

### Instalación

```bash
cd celc-backend
pnpm install
```

### Configurar entorno

Crear archivo `.env` en la raíz:

```env
DATABASE_URL="mysql://usuario:password@localhost:3306/celc"
JWT_SECRET="tu-secreto-jwt"
JWT_EXPIRES_IN="8h"
PORT=3001
CORS_ORIGIN="http://localhost:5173"
```

### Inicializar base de datos

```bash
pnpm prisma:generate    # Generar Prisma Client
pnpm prisma:push        # Sincronizar schema con la BD
```

### Desarrollo

```bash
pnpm start:dev
```

Servidor en `http://localhost:3001` — Documentación Swagger en `http://localhost:3001/api`

### Producción

```bash
pnpm build
pnpm start:prod
```

---

## 📖 Documentación de la API (Swagger)

Una vez corriendo, la documentación interactiva está disponible en:

```
http://localhost:3001/api
```

Incluye todos los endpoints, schemas, y la opción de autenticarse con JWT directamente desde el UI (botón **Authorize**).

---

## 🔐 Autenticación y Roles

| Rol             | ID | Descripción                    |
| --------------- | -- | ------------------------------ |
| Administrador   | 1  | Acceso completo al sistema     |
| Técnico         | 2  | Gestión de líneas y equipos    |
| Empleado        | 3  | Consulta de asignaciones propia |

### Endpoints de autenticación

| Método | Ruta                | Auth | Descripción                    |
| ------ | ------------------- | ---- | ------------------------------ |
| POST   | `/api/auth/register` | ❌  | Registrar nuevo usuario        |
| POST   | `/api/auth/login`    | ❌  | Iniciar sesión → obtiene JWT   |
| GET    | `/api/auth/verify`   | ✅  | Verificar validez del token    |

---

## 📡 Endpoints de la API

| Método | Ruta                               | Módulo       | Auth | Roles       |
| ------ | ---------------------------------- | ------------ | ---- | ----------- |
| GET    | `/api/usuarios`                    | Usuarios     | ✅   | Admin       |
| GET    | `/api/usuarios/:id`                | Usuarios     | ✅   | —           |
| POST   | `/api/usuarios`                    | Usuarios     | ✅   | Admin       |
| PUT    | `/api/usuarios/:id`                | Usuarios     | ✅   | —           |
| DELETE | `/api/usuarios/:id`                | Usuarios     | ✅   | Admin       |
| GET    | `/api/lineas`                      | Líneas       | ✅   | —           |
| GET    | `/api/lineas/:id`                  | Líneas       | ✅   | —           |
| POST   | `/api/lineas`                      | Líneas       | ✅   | Admin/Téc   |
| PUT    | `/api/lineas/:id`                  | Líneas       | ✅   | —           |
| DELETE | `/api/lineas/:id`                  | Líneas       | ✅   | Admin/Téc   |
| PUT    | `/api/lineas/:id/toggle`           | Líneas       | ✅   | Admin/Téc   |
| GET    | `/api/equipos`                     | Equipos      | ✅   | —           |
| GET    | `/api/equipos/:id`                 | Equipos      | ✅   | —           |
| POST   | `/api/equipos`                     | Equipos      | ✅   | —           |
| PUT    | `/api/equipos/:id`                 | Equipos      | ✅   | —           |
| DELETE | `/api/equipos/:id`                 | Equipos      | ✅   | —           |
| GET    | `/api/asignaciones`                | Asignaciones | ✅   | —           |
| GET    | `/api/asignaciones/:id`            | Asignaciones | ✅   | —           |
| POST   | `/api/asignaciones`                | Asignaciones | ✅   | —           |
| PUT    | `/api/asignaciones/:id`            | Asignaciones | ✅   | —           |
| DELETE | `/api/asignaciones/:id`            | Asignaciones | ✅   | —           |
| GET    | `/api/revisiones`                  | Revisiones   | ✅   | —           |
| GET    | `/api/revisiones/:id`              | Revisiones   | ✅   | —           |
| POST   | `/api/revisiones`                  | Revisiones   | ✅   | —           |
| PUT    | `/api/revisiones/:id`              | Revisiones   | ✅   | —           |
| GET    | `/api/reportes/lineas`             | Reportes     | ✅   | —           |
| GET    | `/api/reportes/equipos`            | Reportes     | ✅   | —           |
| GET    | `/api/reportes/asignaciones`       | Reportes     | ✅   | —           |
| GET    | `/api/metricas/dashboard`          | Métricas     | ✅   | —           |
| GET    | `/api/metricas/lineas-activas`     | Métricas     | ✅   | —           |
| GET    | `/api/metricas/equipos-reparacion` | Métricas     | ✅   | —           |
| GET    | `/api/metricas/revisiones-proximas`| Métricas     | ✅   | —           |

---

## 🧪 Testing

```bash
# Tests unitarios
pnpm test

# Tests E2E
pnpm test:e2e

# Cobertura
pnpm test:cov
```

---

## 🗄️ Modelos de Base de Datos

| Modelo          | Descripción                              |
| --------------- | ---------------------------------------- |
| `Usuario`       | Usuarios del sistema con roles           |
| `Rol`           | Catálogo de roles (Admin, Técnico, Empleado) |
| `Linea`         | Líneas telefónicas celulares             |
| `Equipo`        | Equipos/terminales celulares             |
| `Asignacion`    | Asignación de equipos/líneas a usuarios  |
| `Revision`      | Revisiones programadas de equipos        |
| `RegistroError` | Log de errores de la aplicación          |

---

## 📄 Licencia

Proyecto privado — Sistema CELC.

---

**Última actualización**: 4 de junio de 2026
