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
exports.AsignacionesService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let AsignacionesService = class AsignacionesService {
    databaseService;
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async findAll() {
        const sql = 'SELECT * FROM Asignaciones';
        return this.databaseService.query(sql);
    }
    async findById(id) {
        const sql = 'SELECT * FROM Asignaciones WHERE id = ?';
        const asignaciones = await this.databaseService.query(sql, [id]);
        return asignaciones[0] || null;
    }
    async create(data) {
        const sql = 'INSERT INTO Asignaciones (id_usuario, id_equipo, id_linea, fecha_asignacion) VALUES (?, ?, ?, NOW())';
        const result = await this.databaseService.query(sql, [data.id_usuario, data.id_equipo, data.id_linea]);
        return { id: result.insertId };
    }
    async update(id, data) {
        const sql = 'UPDATE Asignaciones SET id_usuario = ?, id_equipo = ?, id_linea = ?, fecha_desasignacion = ? WHERE id = ?';
        await this.databaseService.query(sql, [data.id_usuario, data.id_equipo, data.id_linea, data.fecha_desasignacion, id]);
        return this.findById(id);
    }
    async delete(id) {
        const sql = 'DELETE FROM Asignaciones WHERE id = ?';
        await this.databaseService.query(sql, [id]);
        return { message: 'Asignación eliminada' };
    }
};
exports.AsignacionesService = AsignacionesService;
exports.AsignacionesService = AsignacionesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], AsignacionesService);
//# sourceMappingURL=asignaciones.service.js.map