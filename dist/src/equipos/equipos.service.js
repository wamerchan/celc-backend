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
exports.EquiposService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let EquiposService = class EquiposService {
    databaseService;
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async findAll() {
        return this.databaseService.equipo.findMany();
    }
    async findById(id) {
        return this.databaseService.equipo.findUnique({
            where: { id }
        });
    }
    async create(data) {
        const equipo = await this.databaseService.equipo.create({
            data: {
                marca: data.marca || 'N/A',
                modelo: data.modelo || 'N/A',
                numeroSerie: data.numeroSerie || Date.now().toString(),
                imei: data.imei,
                estado: data.estado,
                fechaAdquisicion: data.fecha_adquisicion ? new Date(data.fecha_adquisicion) : undefined,
                descripcion: data.descripcion
            }
        });
        return { id: equipo.id };
    }
    async update(id, data) {
        await this.databaseService.equipo.update({
            where: { id },
            data: {
                marca: data.marca,
                modelo: data.modelo,
                numeroSerie: data.numeroSerie,
                imei: data.imei,
                estado: data.estado,
                fechaAdquisicion: data.fecha_adquisicion ? new Date(data.fecha_adquisicion) : undefined,
                descripcion: data.descripcion
            }
        });
        return this.findById(id);
    }
    async delete(id) {
        await this.databaseService.equipo.delete({
            where: { id }
        });
        return { message: 'Equipo eliminado' };
    }
};
exports.EquiposService = EquiposService;
exports.EquiposService = EquiposService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], EquiposService);
//# sourceMappingURL=equipos.service.js.map