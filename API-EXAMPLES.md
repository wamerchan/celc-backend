# API Examples - CELC Backend

Este documento contiene ejemplos de uso de la API CELC Backend.

## Requisitos Previos

1. Asegúrate de que el servidor esté corriendo:
```bash
npm run dev
```

2. Usa herramientas como Postman, Insomnia, o curl para probar los endpoints.

## 1. Autenticación

### Registrar un nuevo usuario

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "Juan Pérez",
    "email": "juan@celc.com",
    "password": "password123",
    "role": "user"
  }'
```

**Respuesta exitosa:**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "username": "Juan Pérez",
    "email": "juan@celc.com",
    "role": "user"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqdWFuQGNlbGMuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MDk1NDMyMzQsImV4cCI6MTcwOTYyOTYzNH0.abc123..."
}
```

### Iniciar sesión

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "juan@celc.com",
    "password": "password123"
  }'
```

**Respuesta exitosa:**
```json
{
  "message": "Login successful",
  "user": {
    "id": 1,
    "username": "Juan Pérez",
    "email": "juan@celc.com",
    "role": "user"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**💡 Guarda el token para usarlo en las siguientes peticiones.**

---

## 2. Gestión de Usuarios

### Obtener todos los usuarios

```bash
curl -X GET http://localhost:3000/api/users \
  -H "Authorization: Bearer TU_TOKEN_AQUI"
```

### Obtener un usuario por ID

```bash
curl -X GET http://localhost:3000/api/users/1 \
  -H "Authorization: Bearer TU_TOKEN_AQUI"
```

### Actualizar un usuario

```bash
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Authorization: Bearer TU_TOKEN_AQUI" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "Juan Pérez Actualizado",
    "email": "juan.actualizado@celc.com",
    "role": "admin"
  }'
```

### Eliminar un usuario

```bash
curl -X DELETE http://localhost:3000/api/users/1 \
  -H "Authorization: Bearer TU_TOKEN_AQUI"
```

---

## 3. Gestión de Líneas

### Crear una línea

```bash
curl -X POST http://localhost:3000/api/lines \
  -H "Authorization: Bearer TU_TOKEN_AQUI" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Línea de Producción A",
    "description": "Línea principal de producción",
    "status": "active"
  }'
```

**Respuesta exitosa:**
```json
{
  "message": "Line created successfully",
  "line": {
    "id": 1,
    "name": "Línea de Producción A",
    "description": "Línea principal de producción",
    "status": "active"
  }
}
```

### Obtener todas las líneas

```bash
curl -X GET http://localhost:3000/api/lines \
  -H "Authorization: Bearer TU_TOKEN_AQUI"
```

### Obtener una línea por ID

```bash
curl -X GET http://localhost:3000/api/lines/1 \
  -H "Authorization: Bearer TU_TOKEN_AQUI"
```

### Actualizar una línea

```bash
curl -X PUT http://localhost:3000/api/lines/1 \
  -H "Authorization: Bearer TU_TOKEN_AQUI" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Línea de Producción A - Actualizada",
    "description": "Línea principal actualizada",
    "status": "maintenance"
  }'
```

### Eliminar una línea

```bash
curl -X DELETE http://localhost:3000/api/lines/1 \
  -H "Authorization: Bearer TU_TOKEN_AQUI"
```

---

## 4. Gestión de Equipos

### Crear un equipo

```bash
curl -X POST http://localhost:3000/api/equipment \
  -H "Authorization: Bearer TU_TOKEN_AQUI" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Máquina CNC 2000",
    "description": "Máquina de control numérico",
    "line_id": 1,
    "status": "active",
    "serial_number": "CNC-2000-001"
  }'
```

**Respuesta exitosa:**
```json
{
  "message": "Equipment created successfully",
  "equipment": {
    "id": 1,
    "name": "Máquina CNC 2000",
    "description": "Máquina de control numérico",
    "line_id": 1,
    "status": "active",
    "serial_number": "CNC-2000-001"
  }
}
```

### Obtener todos los equipos

```bash
curl -X GET http://localhost:3000/api/equipment \
  -H "Authorization: Bearer TU_TOKEN_AQUI"
```

### Obtener un equipo por ID

```bash
curl -X GET http://localhost:3000/api/equipment/1 \
  -H "Authorization: Bearer TU_TOKEN_AQUI"
```

### Obtener equipos de una línea específica

```bash
curl -X GET http://localhost:3000/api/equipment/line/1 \
  -H "Authorization: Bearer TU_TOKEN_AQUI"
```

### Actualizar un equipo

```bash
curl -X PUT http://localhost:3000/api/equipment/1 \
  -H "Authorization: Bearer TU_TOKEN_AQUI" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Máquina CNC 2000 Pro",
    "description": "Máquina de control numérico mejorada",
    "line_id": 1,
    "status": "maintenance",
    "serial_number": "CNC-2000-001"
  }'
```

### Eliminar un equipo

```bash
curl -X DELETE http://localhost:3000/api/equipment/1 \
  -H "Authorization: Bearer TU_TOKEN_AQUI"
```

---

## Flujo Completo de Ejemplo

### 1. Registrar usuario
```bash
TOKEN=$(curl -s -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"Admin","email":"admin@celc.com","password":"admin123","role":"admin"}' \
  | grep -o '"token":"[^"]*' | sed 's/"token":"//')
```

### 2. Crear una línea
```bash
curl -X POST http://localhost:3000/api/lines \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name":"Línea 1","description":"Primera línea","status":"active"}'
```

### 3. Crear equipos en la línea
```bash
curl -X POST http://localhost:3000/api/equipment \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name":"Equipo A","description":"Primer equipo","line_id":1,"status":"active","serial_number":"EQ-A-001"}'
```

### 4. Listar todos los equipos
```bash
curl -X GET http://localhost:3000/api/equipment \
  -H "Authorization: Bearer $TOKEN"
```

---

## Códigos de Estado HTTP

- `200 OK` - Operación exitosa
- `201 Created` - Recurso creado exitosamente
- `400 Bad Request` - Datos de entrada inválidos
- `401 Unauthorized` - Token faltante o inválido
- `403 Forbidden` - Token expirado
- `404 Not Found` - Recurso no encontrado
- `409 Conflict` - Conflicto (ej: email ya existe)
- `500 Internal Server Error` - Error del servidor

---

## Notas

- Todos los endpoints excepto `/api/auth/login` y `/api/auth/register` requieren autenticación con JWT
- El token debe enviarse en el header `Authorization: Bearer TOKEN`
- Los tokens expiran después de 24 horas por defecto (configurable en .env)
- Los status válidos para líneas: `active`, `inactive`, `maintenance`
- Los status válidos para equipos: `active`, `inactive`, `maintenance`, `repair`
