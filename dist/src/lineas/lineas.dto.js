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
exports.LineaResponseDto = exports.UpdateLineaDto = exports.CreateLineaDto = exports.LineasEstado = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
var LineasEstado;
(function (LineasEstado) {
    LineasEstado["Activa"] = "Activa";
    LineasEstado["Inactiva"] = "Inactiva";
    LineasEstado["Suspendida"] = "Suspendida";
})(LineasEstado || (exports.LineasEstado = LineasEstado = {}));
class CreateLineaDto {
    numeroTelefono;
    operador;
    planDatos;
    estado;
    fechaActivacion;
    fechaVencimientoPlan;
    descripcion;
}
exports.CreateLineaDto = CreateLineaDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Número de teléfono de la línea',
        example: '3001234567',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateLineaDto.prototype, "numeroTelefono", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Operador de la línea (Ej: Claro, Movistar, Tigo)',
        example: 'Claro',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateLineaDto.prototype, "operador", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Plan de datos o voz asociado',
        example: 'Plan 50GB Navegación',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], CreateLineaDto.prototype, "planDatos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Estado de la línea',
        example: 'Activa',
        enum: LineasEstado,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(LineasEstado),
    __metadata("design:type", String)
], CreateLineaDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Fecha de activación',
        example: '2023-10-01T10:00:00Z',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], CreateLineaDto.prototype, "fechaActivacion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Fecha de vencimiento del plan',
        example: '2024-10-01T10:00:00Z',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], CreateLineaDto.prototype, "fechaVencimientoPlan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Descripción adicional',
        example: 'Línea asignada al área de ventas',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], CreateLineaDto.prototype, "descripcion", void 0);
class UpdateLineaDto {
    numeroTelefono;
    operador;
    planDatos;
    estado;
    fechaActivacion;
    fechaVencimientoPlan;
    descripcion;
}
exports.UpdateLineaDto = UpdateLineaDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Número de teléfono de la línea',
        example: '3001234567',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateLineaDto.prototype, "numeroTelefono", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Operador de la línea',
        example: 'Claro',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateLineaDto.prototype, "operador", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Plan de datos o voz',
        example: 'Plan 50GB Navegación',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], UpdateLineaDto.prototype, "planDatos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Estado de la línea',
        example: 'Activa',
        enum: LineasEstado,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(LineasEstado),
    __metadata("design:type", String)
], UpdateLineaDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Fecha de activación',
        example: '2023-10-01T10:00:00Z',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], UpdateLineaDto.prototype, "fechaActivacion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Fecha de vencimiento del plan',
        example: '2024-10-01T10:00:00Z',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], UpdateLineaDto.prototype, "fechaVencimientoPlan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Descripción adicional',
        example: 'Línea asignada al área de ventas',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], UpdateLineaDto.prototype, "descripcion", void 0);
class LineaResponseDto {
    id;
    numeroTelefono;
    operador;
    planDatos;
    estado;
    fechaActivacion;
    fechaVencimientoPlan;
    descripcion;
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
        description: 'Número de teléfono de la línea',
        example: '3001234567',
    }),
    __metadata("design:type", String)
], LineaResponseDto.prototype, "numeroTelefono", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Operador de la línea',
        example: 'Claro',
    }),
    __metadata("design:type", String)
], LineaResponseDto.prototype, "operador", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Plan de datos o voz asociado',
        example: 'Plan 50GB Navegación',
    }),
    __metadata("design:type", Object)
], LineaResponseDto.prototype, "planDatos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Estado de la línea',
        example: 'Activa',
    }),
    __metadata("design:type", Object)
], LineaResponseDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Fecha de activación',
        example: '2023-10-01T10:00:00Z',
    }),
    __metadata("design:type", Object)
], LineaResponseDto.prototype, "fechaActivacion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Fecha de vencimiento del plan',
        example: '2024-10-01T10:00:00Z',
    }),
    __metadata("design:type", Object)
], LineaResponseDto.prototype, "fechaVencimientoPlan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Descripción adicional',
        example: 'Línea asignada al área de ventas',
    }),
    __metadata("design:type", Object)
], LineaResponseDto.prototype, "descripcion", void 0);
//# sourceMappingURL=lineas.dto.js.map