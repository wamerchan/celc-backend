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
                realizadaPorUsuario: null
            }
        });
        return {
            total,
            label: 'Revisiones Próximas',
        };
    }
    async getDashboardStats() {
        const [totalEquipos, equiposDisponibles, equiposAsignados, equiposEnMantenimiento, totalLineas, lineasActivas, totalAsignaciones, revisionesProximas, eqStates, lOp, eqBrands, revisions,] = await Promise.all([
            this.databaseService.equipo.count(),
            this.databaseService.equipo.count({ where: { estado: 'Disponible' } }),
            this.databaseService.equipo.count({ where: { estado: 'Asignado' } }),
            this.databaseService.equipo.count({ where: { estado: 'En_Mantenimiento' } }),
            this.databaseService.linea.count(),
            this.databaseService.linea.count({ where: { estado: 'Activa' } }),
            this.databaseService.asignacion.count({ where: { fechaDesasignacion: null } }),
            this.databaseService.revision.count({ where: { realizadaPorUsuario: null } }),
            this.databaseService.equipo.groupBy({
                by: ['estado'],
                _count: { estado: true }
            }),
            this.databaseService.linea.groupBy({
                by: ['operador'],
                _count: { operador: true }
            }),
            this.databaseService.equipo.groupBy({
                by: ['marca'],
                _count: { marca: true },
                orderBy: {
                    _count: { marca: 'desc' }
                },
                take: 5
            }),
            this.databaseService.revision.findMany({
                select: { fechaProgramada: true }
            }),
        ]);
        const equiposPorEstado = eqStates.map(item => ({
            estado: item.estado || 'Desconocido',
            count: item._count.estado
        }));
        const lineasPorOperador = lOp.map(item => ({
            operador: item.operador || 'Desconocido',
            count: item._count.operador
        }));
        const topMarcas = eqBrands.map(item => ({
            marca: item.marca || 'Desconocido',
            count: item._count.marca
        }));
        const mesesNombres = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
        const monthCounts = {};
        revisions.forEach(r => {
            if (r.fechaProgramada) {
                const date = new Date(r.fechaProgramada);
                const year = date.getFullYear();
                const monthIndex = date.getMonth();
                const orderKey = `${year}-${String(monthIndex + 1).padStart(2, '0')}`;
                const label = `${mesesNombres[monthIndex]} ${year}`;
                if (!monthCounts[orderKey]) {
                    monthCounts[orderKey] = { order: orderKey, label, count: 0 };
                }
                monthCounts[orderKey].count += 1;
            }
        });
        const revisionesPorMes = Object.values(monthCounts)
            .sort((a, b) => a.order.localeCompare(b.order))
            .map(item => ({
            mes: item.label,
            count: item.count
        }));
        return {
            totalEquipos,
            equiposDisponibles,
            equiposAsignados,
            equiposEnMantenimiento,
            totalLineas,
            lineasActivas,
            totalAsignaciones,
            revisionesProximas,
            equiposPorEstado,
            lineasPorOperador,
            revisionesPorMes,
            topMarcas,
        };
    }
};
exports.MetricasService = MetricasService;
exports.MetricasService = MetricasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], MetricasService);
//# sourceMappingURL=metricas.service.js.map