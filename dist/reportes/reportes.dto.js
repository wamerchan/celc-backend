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
exports.ReportResponseDto = exports.ReportFiltersDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class ReportFiltersDto {
    estado;
    fecha_desde;
    fecha_hasta;
    id_usuario;
    id_equipo;
    id_linea;
}
exports.ReportFiltersDto = ReportFiltersDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Estado del registro (0: Inactivo, 1: Activo)',
        example: 1,
        enum: [0, 1],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value ? parseInt(value) : value),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ReportFiltersDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Fecha desde (formato YYYY-MM-DD)',
        example: '2023-01-01',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReportFiltersDto.prototype, "fecha_desde", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Fecha hasta (formato YYYY-MM-DD)',
        example: '2023-12-31',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReportFiltersDto.prototype, "fecha_hasta", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'ID del usuario',
        example: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value ? parseInt(value) : value),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ReportFiltersDto.prototype, "id_usuario", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'ID del equipo',
        example: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value ? parseInt(value) : value),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ReportFiltersDto.prototype, "id_equipo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'ID de la línea',
        example: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value ? parseInt(value) : value),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ReportFiltersDto.prototype, "id_linea", void 0);
class ReportResponseDto {
    data;
}
exports.ReportResponseDto = ReportResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Datos del reporte',
        example: [],
    }),
    __metadata("design:type", Array)
], ReportResponseDto.prototype, "data", void 0);
//# sourceMappingURL=reportes.dto.js.map