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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const reportes_service_1 = require("./reportes.service");
const jwt_guard_1 = require("../auth/jwt.guard");
const reportes_dto_1 = require("./reportes.dto");
let ReportesController = class ReportesController {
    reportesService;
    constructor(reportesService) {
        this.reportesService = reportesService;
    }
    async getLineasReport(query) {
        return this.reportesService.getLineasReport(query);
    }
    async getEquiposReport(query) {
        return this.reportesService.getEquiposReport(query);
    }
    async getAsignacionesReport(query) {
        return this.reportesService.getAsignacionesReport(query);
    }
};
exports.ReportesController = ReportesController;
__decorate([
    (0, common_1.Get)('lineas'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener reporte de líneas de producción' }),
    (0, swagger_1.ApiQuery)({ type: reportes_dto_1.ReportFiltersDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Reporte de líneas generado exitosamente', type: reportes_dto_1.ReportResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reportes_dto_1.ReportFiltersDto]),
    __metadata("design:returntype", Promise)
], ReportesController.prototype, "getLineasReport", null);
__decorate([
    (0, common_1.Get)('equipos'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener reporte de equipos' }),
    (0, swagger_1.ApiQuery)({ type: reportes_dto_1.ReportFiltersDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Reporte de equipos generado exitosamente', type: reportes_dto_1.ReportResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reportes_dto_1.ReportFiltersDto]),
    __metadata("design:returntype", Promise)
], ReportesController.prototype, "getEquiposReport", null);
__decorate([
    (0, common_1.Get)('asignaciones'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener reporte de asignaciones' }),
    (0, swagger_1.ApiQuery)({ type: reportes_dto_1.ReportFiltersDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Reporte de asignaciones generado exitosamente', type: reportes_dto_1.ReportResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reportes_dto_1.ReportFiltersDto]),
    __metadata("design:returntype", Promise)
], ReportesController.prototype, "getAsignacionesReport", null);
exports.ReportesController = ReportesController = __decorate([
    (0, swagger_1.ApiTags)('reportes'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.Controller)('api/reportes'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __metadata("design:paramtypes", [reportes_service_1.ReportesService])
], ReportesController);
//# sourceMappingURL=reportes.controller.js.map