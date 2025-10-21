"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let UsuariosService = class UsuariosService {
    databaseService;
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async findAll() {
        const sql = `
      SELECT 
        u.id_usuario AS id, 
        u.nombres, 
        u.apellidos, 
        u.correo_electronico AS email, 
        u.id_rol,
        r.nombre_rol AS rol,
        u.fecha_creacion, 
        u.ultimo_login 
      FROM Usuarios u
      LEFT JOIN Roles r ON u.id_rol = r.id_rol
    `;
        return this.databaseService.query(sql);
    }
    async findById(id) {
        const sql = `
      SELECT 
        u.id_usuario AS id, 
        u.nombres, 
        u.apellidos, 
        u.correo_electronico AS email, 
        u.id_rol,
        r.nombre_rol AS rol,
        u.fecha_creacion, 
        u.ultimo_login 
      FROM Usuarios u
      LEFT JOIN Roles r ON u.id_rol = r.id_rol
      WHERE u.id_usuario = ?
    `;
        const users = await this.databaseService.query(sql, [id]);
        return users[0] || null;
    }
    async create(data) {
        const sql = 'INSERT INTO Usuarios (nombres, correo_electronico, contrasena_hash, id_rol, fecha_creacion) VALUES (?, ?, ?, ?, NOW())';
        const result = await this.databaseService.query(sql, [data.nombre, data.email, data.password, data.id_rol]);
        return { id: result.insertId };
    }
    async update(id, data) {
        const fields = [];
        const values = [];
        if (data.nombre) {
            fields.push('nombres = ?');
            values.push(data.nombre);
        }
        if (data.email) {
            fields.push('correo_electronico = ?');
            values.push(data.email);
        }
        if (data.id_rol) {
            fields.push('id_rol = ?');
            values.push(data.id_rol);
        }
        if (fields.length === 0)
            return null;
        const sql = `UPDATE Usuarios SET ${fields.join(', ')} WHERE id_usuario = ?`;
        values.push(id);
        await this.databaseService.query(sql, values);
        return this.findById(id);
    }
    async delete(id) {
        const sql = 'DELETE FROM Usuarios WHERE id_usuario = ?';
        await this.databaseService.query(sql, [id]);
        return { message: 'Usuario eliminado' };
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map