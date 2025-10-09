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
exports.UsuarioResponseDto = exports.UpdateUsuarioDto = exports.CreateUsuarioDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateUsuarioDto {
    nombre;
    email;
    password;
    id_rol;
}
exports.CreateUsuarioDto = CreateUsuarioDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre completo del usuario',
        example: 'María González',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Correo electrónico del usuario',
        example: 'maria.gonzalez@empresa.com',
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Contraseña del usuario (mínimo 6 caracteres)',
        example: 'securepass123',
        minLength: 6,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID del rol del usuario (1: Administrador, 2: Técnico)',
        example: 2,
        enum: [1, 2],
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateUsuarioDto.prototype, "id_rol", void 0);
class UpdateUsuarioDto {
    nombre;
    email;
    id_rol;
}
exports.UpdateUsuarioDto = UpdateUsuarioDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Nombre completo del usuario',
        example: 'María González',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateUsuarioDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Correo electrónico del usuario',
        example: 'maria.gonzalez@empresa.com',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateUsuarioDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'ID del rol del usuario (1: Administrador, 2: Técnico)',
        example: 2,
        enum: [1, 2],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateUsuarioDto.prototype, "id_rol", void 0);
class UsuarioResponseDto {
    id;
    nombre;
    email;
    id_rol;
    fecha_creacion;
    ultimo_login;
}
exports.UsuarioResponseDto = UsuarioResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID único del usuario',
        example: 1,
    }),
    __metadata("design:type", Number)
], UsuarioResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre completo del usuario',
        example: 'María González',
    }),
    __metadata("design:type", String)
], UsuarioResponseDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Correo electrónico del usuario',
        example: 'maria.gonzalez@empresa.com',
    }),
    __metadata("design:type", String)
], UsuarioResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID del rol del usuario',
        example: 2,
    }),
    __metadata("design:type", Number)
], UsuarioResponseDto.prototype, "id_rol", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de creación del usuario',
        example: '2023-10-01T10:00:00Z',
    }),
    __metadata("design:type", Date)
], UsuarioResponseDto.prototype, "fecha_creacion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Último login del usuario',
        example: '2023-10-08T15:30:00Z',
    }),
    __metadata("design:type", Date)
], UsuarioResponseDto.prototype, "ultimo_login", void 0);
//# sourceMappingURL=usuarios.dto.js.map