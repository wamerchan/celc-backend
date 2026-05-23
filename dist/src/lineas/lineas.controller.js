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
exports.LineasController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const lineas_service_1 = require("./lineas.service");
const jwt_guard_1 = require("../auth/jwt.guard");
const role_guard_1 = require("../auth/role.guard");
const lineas_dto_1 = require("./lineas.dto");
let LineasController = class LineasController {
    lineasService;
    constructor(lineasService) {
        this.lineasService = lineasService;
    }
    async findAll() {
        const lineas = await this.lineasService.findAll();
        return lineas.map(linea => ({
            ...linea,
            planDatos: linea.planDatos ?? undefined,
            estado: linea.estado ?? undefined,
            descripcion: linea.descripcion ?? undefined,
            fechaActivacion: linea.fechaActivacion ?? undefined,
            fechaVencimientoPlan: linea.fechaVencimientoPlan ?? undefined
        }));
    }
    async findById(id) {
        const linea = await this.lineasService.findById(+id);
        if (!linea)
            return null;
        return {
            ...linea,
            planDatos: linea.planDatos ?? undefined,
            estado: linea.estado ?? undefined,
            descripcion: linea.descripcion ?? undefined,
            fechaActivacion: linea.fechaActivacion ?? undefined,
            fechaVencimientoPlan: linea.fechaVencimientoPlan ?? undefined
        };
    }
    async create(body) {
        return this.lineasService.create(body);
    }
    async update(id, body) {
        return this.lineasService.update(+id, body);
    }
    async delete(id) {
        return this.lineasService.delete(+id);
    }
    async toggleStatus(id) {
        const linea = await this.lineasService.toggleStatus(+id);
        if (!linea)
            return null;
        return {
            ...linea,
            planDatos: linea.planDatos ?? undefined,
            estado: linea.estado ?? undefined,
            descripcion: linea.descripcion ?? undefined,
            fechaActivacion: linea.fechaActivacion ?? undefined,
            fechaVencimientoPlan: linea.fechaVencimientoPlan ?? undefined
        };
    }
};
exports.LineasController = LineasController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todas las líneas celulares' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de líneas', type: [lineas_dto_1.LineaResponseDto] }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LineasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener una línea por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la línea', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Línea encontrada', type: lineas_dto_1.LineaResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Línea no encontrada' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LineasController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(new role_guard_1.RoleGuard([1, 2])),
    (0, swagger_1.ApiOperation)({ summary: 'Crear una nueva línea celular' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Línea creada exitosamente', type: lineas_dto_1.LineaResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Acceso denegado' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [lineas_dto_1.CreateLineaDto]),
    __metadata("design:returntype", Promise)
], LineasController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar una línea celular' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la línea a actualizar', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Línea actualizada', type: lineas_dto_1.LineaResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Línea no encontrada' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, lineas_dto_1.UpdateLineaDto]),
    __metadata("design:returntype", Promise)
], LineasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(new role_guard_1.RoleGuard([1, 2])),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar una línea celular' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la línea a eliminar', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Línea eliminada exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Línea no encontrada' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Acceso denegado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LineasController.prototype, "delete", null);
__decorate([
    (0, common_1.Put)(':id/toggle'),
    (0, common_1.UseGuards)(new role_guard_1.RoleGuard([1, 2])),
    (0, swagger_1.ApiOperation)({ summary: 'Cambiar estado de una línea (Activa/Inactiva/Suspendida)' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la línea a cambiar', example: 1 }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Estado de la línea actualizado',
        type: lineas_dto_1.LineaResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Línea no encontrada' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Acceso denegado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LineasController.prototype, "toggleStatus", null);
exports.LineasController = LineasController = __decorate([
    (0, swagger_1.ApiTags)('lineas'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.Controller)('api/lineas'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __metadata("design:paramtypes", [lineas_service_1.LineasService])
], LineasController);
//# sourceMappingURL=lineas.controller.js.map