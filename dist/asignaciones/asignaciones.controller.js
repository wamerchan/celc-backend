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
exports.AsignacionesController = void 0;
const common_1 = require("@nestjs/common");
const asignaciones_service_1 = require("./asignaciones.service");
const jwt_guard_1 = require("../auth/jwt.guard");
let AsignacionesController = class AsignacionesController {
    asignacionesService;
    constructor(asignacionesService) {
        this.asignacionesService = asignacionesService;
    }
    async findAll() {
        return this.asignacionesService.findAll();
    }
    async findById(id) {
        return this.asignacionesService.findById(+id);
    }
    async create(body) {
        return this.asignacionesService.create(body);
    }
    async update(id, body) {
        return this.asignacionesService.update(+id, body);
    }
    async delete(id) {
        return this.asignacionesService.delete(+id);
    }
};
exports.AsignacionesController = AsignacionesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AsignacionesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AsignacionesController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AsignacionesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AsignacionesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AsignacionesController.prototype, "delete", null);
exports.AsignacionesController = AsignacionesController = __decorate([
    (0, common_1.Controller)('api/asignaciones'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __metadata("design:paramtypes", [asignaciones_service_1.AsignacionesService])
], AsignacionesController);
//# sourceMappingURL=asignaciones.controller.js.map