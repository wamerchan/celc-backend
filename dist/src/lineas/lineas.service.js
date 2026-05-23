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
exports.LineasService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
const client_1 = require("@prisma/client");
let LineasService = class LineasService {
    databaseService;
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async findAll() {
        return this.databaseService.linea.findMany();
    }
    async findById(id) {
        return this.databaseService.linea.findUnique({
            where: { id }
        });
    }
    async create(data) {
        const linea = await this.databaseService.linea.create({
            data: {
                numeroTelefono: data.numeroTelefono,
                operador: data.operador,
                planDatos: data.planDatos,
                estado: data.estado || client_1.LineasEstado.Activa,
                fechaActivacion: data.fechaActivacion ? new Date(data.fechaActivacion) : new Date(),
                fechaVencimientoPlan: data.fechaVencimientoPlan ? new Date(data.fechaVencimientoPlan) : undefined,
                descripcion: data.descripcion
            }
        });
        return { id: linea.id };
    }
    async update(id, data) {
        await this.databaseService.linea.update({
            where: { id },
            data: {
                numeroTelefono: data.numeroTelefono,
                operador: data.operador,
                planDatos: data.planDatos,
                estado: data.estado,
                fechaActivacion: data.fechaActivacion ? new Date(data.fechaActivacion) : undefined,
                fechaVencimientoPlan: data.fechaVencimientoPlan ? new Date(data.fechaVencimientoPlan) : undefined,
                descripcion: data.descripcion
            }
        });
        return this.findById(id);
    }
    async delete(id) {
        await this.databaseService.linea.delete({
            where: { id }
        });
        return { message: 'Línea eliminada' };
    }
    async toggleStatus(id) {
        const linea = await this.findById(id);
        if (!linea) {
            throw new common_1.NotFoundException('Línea no encontrada');
        }
        const nuevoEstado = linea.estado === client_1.LineasEstado.Activa ? client_1.LineasEstado.Inactiva : client_1.LineasEstado.Activa;
        await this.databaseService.linea.update({
            where: { id },
            data: { estado: nuevoEstado }
        });
        return this.findById(id);
    }
};
exports.LineasService = LineasService;
exports.LineasService = LineasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], LineasService);
//# sourceMappingURL=lineas.service.js.map