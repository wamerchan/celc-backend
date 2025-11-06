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
exports.MetricasController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const metricas_service_1 = require("./metricas.service");
const jwt_guard_1 = require("../auth/jwt.guard");
let MetricasController = class MetricasController {
    metricasService;
    constructor(metricasService) {
        this.metricasService = metricasService;
    }
    async getTotalActiveLines() {
        return await this.metricasService.getTotalActiveLines();
    }
    async getEquipmentsInRepair() {
        return await this.metricasService.getEquipmentsInRepair();
    }
    async getUpcomingReviews() {
        return await this.metricasService.getUpcomingReviews();
    }
    async getDashboardStats() {
        return await this.metricasService.getDashboardStats();
    }
};
exports.MetricasController = MetricasController;
__decorate([
    (0, common_1.Get)('lineas-activas'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener cantidad de líneas activas' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Cantidad de líneas activas' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MetricasController.prototype, "getTotalActiveLines", null);
__decorate([
    (0, common_1.Get)('equipos-reparacion'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener cantidad de equipos en reparación' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Cantidad de equipos en reparación' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MetricasController.prototype, "getEquipmentsInRepair", null);
__decorate([
    (0, common_1.Get)('revisiones-proximas'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener cantidad de revisiones próximas' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Cantidad de revisiones próximas' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MetricasController.prototype, "getUpcomingReviews", null);
__decorate([
    (0, common_1.Get)('dashboard'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todas las métricas del dashboard' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Todas las métricas del dashboard' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MetricasController.prototype, "getDashboardStats", null);
exports.MetricasController = MetricasController = __decorate([
    (0, swagger_1.ApiTags)('metricas'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.Controller)('api/metricas'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __metadata("design:paramtypes", [metricas_service_1.MetricasService])
], MetricasController);
//# sourceMappingURL=metricas.controller.js.map