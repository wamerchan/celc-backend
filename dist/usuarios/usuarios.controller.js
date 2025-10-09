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
exports.UsuariosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const usuarios_service_1 = require("./usuarios.service");
const jwt_guard_1 = require("../auth/jwt.guard");
const role_guard_1 = require("../auth/role.guard");
const usuarios_dto_1 = require("./usuarios.dto");
let UsuariosController = class UsuariosController {
    usuariosService;
    constructor(usuariosService) {
        this.usuariosService = usuariosService;
    }
    async findAll() {
        return this.usuariosService.findAll();
    }
    async findById(id) {
        return this.usuariosService.findById(+id);
    }
    async create(body) {
        return this.usuariosService.create(body);
    }
    async update(id, body) {
        return this.usuariosService.update(+id, body);
    }
    async delete(id) {
        return this.usuariosService.delete(+id);
    }
};
exports.UsuariosController = UsuariosController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(new role_guard_1.RoleGuard([1])),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los usuarios' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de usuarios', type: [usuarios_dto_1.UsuarioResponseDto] }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Acceso denegado' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un usuario por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID del usuario', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Usuario encontrado', type: usuarios_dto_1.UsuarioResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Usuario no encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(new role_guard_1.RoleGuard([1])),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo usuario' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Usuario creado exitosamente', type: usuarios_dto_1.UsuarioResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Acceso denegado' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuarios_dto_1.CreateUsuarioDto]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un usuario' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID del usuario a actualizar', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Usuario actualizado', type: usuarios_dto_1.UsuarioResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Usuario no encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, usuarios_dto_1.UpdateUsuarioDto]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(new role_guard_1.RoleGuard([1])),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un usuario' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID del usuario a eliminar', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Usuario eliminado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Usuario no encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Acceso denegado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "delete", null);
exports.UsuariosController = UsuariosController = __decorate([
    (0, swagger_1.ApiTags)('usuarios'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.Controller)('api/usuarios'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __metadata("design:paramtypes", [usuarios_service_1.UsuariosService])
], UsuariosController);
//# sourceMappingURL=usuarios.controller.js.map