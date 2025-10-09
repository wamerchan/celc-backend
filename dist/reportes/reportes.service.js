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
exports.ReportesService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let ReportesService = class ReportesService {
    databaseService;
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async getLineasReport(filters) {
        let sql = 'SELECT * FROM Lineas WHERE 1=1';
        const params = [];
        if (filters.estado) {
            sql += ' AND estado = ?';
            params.push(filters.estado);
        }
        if (filters.fecha_desde) {
            sql += ' AND fecha_creacion >= ?';
            params.push(filters.fecha_desde);
        }
        if (filters.fecha_hasta) {
            sql += ' AND fecha_creacion <= ?';
            params.push(filters.fecha_hasta);
        }
        return this.databaseService.query(sql, params);
    }
    async getEquiposReport(filters) {
        let sql = 'SELECT * FROM Equipos WHERE 1=1';
        const params = [];
        if (filters.estado) {
            sql += ' AND estado = ?';
            params.push(filters.estado);
        }
        if (filters.fecha_desde) {
            sql += ' AND fecha_adquisicion >= ?';
            params.push(filters.fecha_desde);
        }
        if (filters.fecha_hasta) {
            sql += ' AND fecha_adquisicion <= ?';
            params.push(filters.fecha_hasta);
        }
        return this.databaseService.query(sql, params);
    }
    async getAsignacionesReport(filters) {
        let sql = 'SELECT * FROM Asignaciones WHERE 1=1';
        const params = [];
        if (filters.id_usuario) {
            sql += ' AND id_usuario = ?';
            params.push(filters.id_usuario);
        }
        if (filters.id_equipo) {
            sql += ' AND id_equipo = ?';
            params.push(filters.id_equipo);
        }
        if (filters.id_linea) {
            sql += ' AND id_linea = ?';
            params.push(filters.id_linea);
        }
        if (filters.fecha_desde) {
            sql += ' AND fecha_asignacion >= ?';
            params.push(filters.fecha_desde);
        }
        if (filters.fecha_hasta) {
            sql += ' AND fecha_asignacion <= ?';
            params.push(filters.fecha_hasta);
        }
        return this.databaseService.query(sql, params);
    }
};
exports.ReportesService = ReportesService;
exports.ReportesService = ReportesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], ReportesService);
//# sourceMappingURL=reportes.service.js.map