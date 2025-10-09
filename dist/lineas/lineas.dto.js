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
exports.LineaResponseDto = exports.UpdateLineaDto = exports.CreateLineaDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateLineaDto {
    nombre;
    descripcion;
    ubicacion;
}
exports.CreateLineaDto = CreateLineaDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre de la línea de producción',
        example: 'Línea de Ensamblaje 1',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateLineaDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Descripción de la línea',
        example: 'Línea dedicada al ensamblaje de productos electrónicos',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateLineaDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ubicación de la línea',
        example: 'Planta Norte, Sector A',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateLineaDto.prototype, "ubicacion", void 0);
class UpdateLineaDto {
    nombre;
    descripcion;
    ubicacion;
    estado;
}
exports.UpdateLineaDto = UpdateLineaDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Nombre de la línea de producción',
        example: 'Línea de Ensamblaje 1',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateLineaDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Descripción de la línea',
        example: 'Línea dedicada al ensamblaje de productos electrónicos',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateLineaDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Ubicación de la línea',
        example: 'Planta Norte, Sector A',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateLineaDto.prototype, "ubicacion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Estado de la línea (1: Activa, 0: Inactiva)',
        example: 1,
        enum: [0, 1],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateLineaDto.prototype, "estado", void 0);
class LineaResponseDto {
    id;
    nombre;
    descripcion;
    ubicacion;
    estado;
    fecha_creacion;
}
exports.LineaResponseDto = LineaResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID único de la línea',
        example: 1,
    }),
    __metadata("design:type", Number)
], LineaResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre de la línea de producción',
        example: 'Línea de Ensamblaje 1',
    }),
    __metadata("design:type", String)
], LineaResponseDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Descripción de la línea',
        example: 'Línea dedicada al ensamblaje de productos electrónicos',
    }),
    __metadata("design:type", String)
], LineaResponseDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ubicación de la línea',
        example: 'Planta Norte, Sector A',
    }),
    __metadata("design:type", String)
], LineaResponseDto.prototype, "ubicacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Estado de la línea',
        example: 1,
    }),
    __metadata("design:type", Number)
], LineaResponseDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de creación de la línea',
        example: '2023-10-01T10:00:00Z',
    }),
    __metadata("design:type", Date)
], LineaResponseDto.prototype, "fecha_creacion", void 0);
//# sourceMappingURL=lineas.dto.js.map