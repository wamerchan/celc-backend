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
        return this.databaseService.asignacion.findMany({
            include: {
                usuario: true,
                equipo: true,
                linea: true
            }
        });
    }
    async findById(id) {
        return this.databaseService.asignacion.findUnique({
            where: { id },
            include: {
                usuario: true,
                equipo: true,
                linea: true
            }
        });
    }
    async create(data) {
        const asignacion = await this.databaseService.asignacion.create({
            data: {
                usuarioId: data.id_usuario,
                equipoId: data.id_equipo,
                lineaId: data.id_linea,
                fechaAsignacion: new Date(),
                observaciones: data.observaciones
            }
        });
        return { id: asignacion.id };
    }
    async update(id, data) {
        await this.databaseService.asignacion.update({
            where: { id },
            data: {
                usuarioId: data.id_usuario,
                equipoId: data.id_equipo,
                lineaId: data.id_linea,
                fechaDesasignacion: data.fecha_desasignacion ? new Date(data.fecha_desasignacion) : null,
                observaciones: data.observaciones
            }
        });
        return this.findById(id);
    }
    async delete(id) {
        await this.databaseService.asignacion.delete({
            where: { id }
        });
        return { message: 'Asignación eliminada' };
    }
};
exports.AsignacionesService = AsignacionesService;
exports.AsignacionesService = AsignacionesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], AsignacionesService);
//# sourceMappingURL=asignaciones.service.js.map