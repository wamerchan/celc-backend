import { IsNotEmpty, IsOptional, IsString, IsEnum, IsDateString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum LineasEstado {
  Activa = 'Activa',
  Inactiva = 'Inactiva',
  Suspendida = 'Suspendida'
}

export class CreateLineaDto {
  @ApiProperty({
    description: 'Número de teléfono de la línea',
    example: '3001234567',
  })
  @IsString()
  @IsNotEmpty()
  numeroTelefono: string;

  @ApiProperty({
    description: 'Operador de la línea (Ej: Claro, Movistar, Tigo)',
    example: 'Claro',
  })
  @IsString()
  @IsNotEmpty()
  operador: string;

  @ApiPropertyOptional({
    description: 'Plan de datos o voz asociado',
    example: 'Plan 50GB Navegación',
  })
  @IsOptional()
  @IsString()
  planDatos?: string | null;

  @ApiPropertyOptional({
    description: 'Estado de la línea',
    example: 'Activa',
    enum: LineasEstado,
  })
  @IsOptional()
  @IsEnum(LineasEstado)
  estado?: LineasEstado;

  @ApiPropertyOptional({
    description: 'Fecha de activación',
    example: '2023-10-01T10:00:00Z',
  })
  @IsOptional()
  @IsDateString()
  fechaActivacion?: Date | null;

  @ApiPropertyOptional({
    description: 'Fecha de vencimiento del plan',
    example: '2024-10-01T10:00:00Z',
  })
  @IsOptional()
  @IsDateString()
  fechaVencimientoPlan?: Date | null;

  @ApiPropertyOptional({
    description: 'Descripción adicional',
    example: 'Línea asignada al área de ventas',
  })
  @IsOptional()
  @IsString()
  descripcion?: string | null;
}

export class UpdateLineaDto {
  @ApiPropertyOptional({
    description: 'Número de teléfono de la línea',
    example: '3001234567',
  })
  @IsOptional()
  @IsString()
  numeroTelefono?: string;

  @ApiPropertyOptional({
    description: 'Operador de la línea',
    example: 'Claro',
  })
  @IsOptional()
  @IsString()
  operador?: string;

  @ApiPropertyOptional({
    description: 'Plan de datos o voz',
    example: 'Plan 50GB Navegación',
  })
  @IsOptional()
  @IsString()
  planDatos?: string | null;

  @ApiPropertyOptional({
    description: 'Estado de la línea',
    example: 'Activa',
    enum: LineasEstado,
  })
  @IsOptional()
  @IsEnum(LineasEstado)
  estado?: LineasEstado;

  @ApiPropertyOptional({
    description: 'Fecha de activación',
    example: '2023-10-01T10:00:00Z',
  })
  @IsOptional()
  @IsDateString()
  fechaActivacion?: Date | null;

  @ApiPropertyOptional({
    description: 'Fecha de vencimiento del plan',
    example: '2024-10-01T10:00:00Z',
  })
  @IsOptional()
  @IsDateString()
  fechaVencimientoPlan?: Date | null;

  @ApiPropertyOptional({
    description: 'Descripción adicional',
    example: 'Línea asignada al área de ventas',
  })
  @IsOptional()
  @IsString()
  descripcion?: string | null;
}

export class LineaResponseDto {
  @ApiProperty({
    description: 'ID único de la línea',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Número de teléfono de la línea',
    example: '3001234567',
  })
  numeroTelefono: string;

  @ApiProperty({
    description: 'Operador de la línea',
    example: 'Claro',
  })
  operador: string;

  @ApiPropertyOptional({
    description: 'Plan de datos o voz asociado',
    example: 'Plan 50GB Navegación',
  })
  planDatos?: string | null;

  @ApiPropertyOptional({
    description: 'Estado de la línea',
    example: 'Activa',
  })
  estado?: string | null;

  @ApiPropertyOptional({
    description: 'Fecha de activación',
    example: '2023-10-01T10:00:00Z',
  })
  fechaActivacion?: Date | null;

  @ApiPropertyOptional({
    description: 'Fecha de vencimiento del plan',
    example: '2024-10-01T10:00:00Z',
  })
  fechaVencimientoPlan?: Date | null;

  @ApiPropertyOptional({
    description: 'Descripción adicional',
    example: 'Línea asignada al área de ventas',
  })
  descripcion?: string | null;
}