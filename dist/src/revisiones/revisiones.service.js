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
exports.RevisionesService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let RevisionesService = class RevisionesService {
    databaseService;
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async findAll() {
        return this.databaseService.revision.findMany({
            include: {
                equipo: true,
                usuario: true
            }
        });
    }
    async findById(id) {
        return this.databaseService.revision.findUnique({
            where: { id },
            include: {
                equipo: true,
                usuario: true
            }
        });
    }
    async create(data) {
        const revision = await this.databaseService.revision.create({
            data: {
                equipoId: data.id_equipo,
                realizadaPorUsuario: data.id_tecnico,
                fechaProgramada: new Date(data.fecha_programada),
                resultado: data.estado || undefined,
                observaciones: data.resultados || undefined
            }
        });
        return { id: revision.id };
    }
    async update(id, data) {
        await this.databaseService.revision.update({
            where: { id },
            data: {
                equipoId: data.id_equipo,
                realizadaPorUsuario: data.id_tecnico,
                fechaProgramada: data.fecha_programada ? new Date(data.fecha_programada) : undefined,
                fechaRealizada: data.fecha_realizada ? new Date(data.fecha_realizada) : undefined,
                resultado: data.estado || undefined,
                observaciones: data.resultados || undefined
            }
        });
        return this.findById(id);
    }
};
exports.RevisionesService = RevisionesService;
exports.RevisionesService = RevisionesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], RevisionesService);
//# sourceMappingURL=revisiones.service.js.map