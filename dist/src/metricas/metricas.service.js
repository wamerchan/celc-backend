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
exports.MetricasService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let MetricasService = class MetricasService {
    databaseService;
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async getTotalActiveLines() {
        const total = await this.databaseService.linea.count({
            where: { estado: 'Activa' }
        });
        return {
            total,
            label: 'Líneas Activas',
        };
    }
    async getEquipmentsInRepair() {
        const total = await this.databaseService.equipo.count({
            where: { estado: 'En_Mantenimiento' }
        });
        return {
            total,
            label: 'Equipos en Reparación',
        };
    }
    async getUpcomingReviews() {
        const total = await this.databaseService.revision.count({
            where: {
                fechaProgramada: { gt: new Date() },
                realizadaPorUsuario: null
            }
        });
        return {
            total,
            label: 'Revisiones Próximas',
        };
    }
    async getDashboardStats() {
        const [activeLines, equipmentsInRepair, upcomingReviews] = await Promise.all([
            this.getTotalActiveLines(),
            this.getEquipmentsInRepair(),
            this.getUpcomingReviews(),
        ]);
        return {
            activeLines,
            equipmentsInRepair,
            upcomingReviews,
        };
    }
};
exports.MetricasService = MetricasService;
exports.MetricasService = MetricasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], MetricasService);
//# sourceMappingURL=metricas.service.js.map