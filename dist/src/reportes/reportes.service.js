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
        const where = {};
        const dateDesde = filters.startDate ?? filters.fecha_desde;
        const dateHasta = filters.endDate ?? filters.fecha_hasta;
        if (filters.estado) {
            where.estado = filters.estado;
        }
        if (dateDesde) {
            where.fechaActivacion = { ...where.fechaActivacion, gte: new Date(dateDesde) };
        }
        if (dateHasta) {
            where.fechaActivacion = { ...where.fechaActivacion, lte: new Date(dateHasta) };
        }
        return this.databaseService.linea.findMany({
            where,
            include: {
                asignaciones: {
                    where: { fechaDesasignacion: null },
                    include: { usuario: true }
                }
            }
        });
    }
    async getEquiposReport(filters) {
        const where = {};
        const dateDesde = filters.startDate ?? filters.fecha_desde;
        const dateHasta = filters.endDate ?? filters.fecha_hasta;
        if (filters.estado) {
            where.estado = filters.estado;
        }
        if (dateDesde) {
            where.fechaAdquisicion = { ...where.fechaAdquisicion, gte: new Date(dateDesde) };
        }
        if (dateHasta) {
            where.fechaAdquisicion = { ...where.fechaAdquisicion, lte: new Date(dateHasta) };
        }
        return this.databaseService.equipo.findMany({
            where,
            include: {
                revisiones: {
                    orderBy: { fechaProgramada: 'desc' }
                }
            }
        });
    }
    async getAsignacionesReport(filters) {
        const where = {};
        const dateDesde = filters.startDate ?? filters.fecha_desde;
        const dateHasta = filters.endDate ?? filters.fecha_hasta;
        if (filters.id_usuario) {
            where.usuarioId = Number(filters.id_usuario);
        }
        if (filters.id_equipo) {
            where.equipoId = Number(filters.id_equipo);
        }
        if (filters.id_linea) {
            where.lineaId = Number(filters.id_linea);
        }
        if (dateDesde) {
            where.fechaAsignacion = { ...where.fechaAsignacion, gte: new Date(dateDesde) };
        }
        if (dateHasta) {
            where.fechaAsignacion = { ...where.fechaAsignacion, lte: new Date(dateHasta) };
        }
        return this.databaseService.asignacion.findMany({
            where,
            include: {
                usuario: true,
                equipo: true,
                linea: true
            }
        });
    }
};
exports.ReportesService = ReportesService;
exports.ReportesService = ReportesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], ReportesService);
//# sourceMappingURL=reportes.service.js.map