import { IsOptional, IsNumber, IsString } from 'class-validator';
import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class ReportFiltersDto {
  @ApiPropertyOptional({
    description: 'Estado del registro (0: Inactivo, 1: Activo)',
    example: 1,
    enum: [0, 1],
  })
  @IsOptional()
  @Transform(({ value }) => value ? parseInt(value) : value)
  @IsNumber()
  estado?: number;

  @ApiPropertyOptional({
    description: 'Fecha desde (formato YYYY-MM-DD)',
    example: '2023-01-01',
  })
  @IsOptional()
  @IsString()
  fecha_desde?: string;

  @ApiPropertyOptional({
    description: 'Fecha hasta (formato YYYY-MM-DD)',
    example: '2023-12-31',
  })
  @IsOptional()
  @IsString()
  fecha_hasta?: string;

  @ApiPropertyOptional({
    description: 'ID del usuario',
    example: 1,
  })
  @IsOptional()
  @Transform(({ value }) => value ? parseInt(value) : value)
  @IsNumber()
  id_usuario?: number;

  @ApiPropertyOptional({
    description: 'ID del equipo',
    example: 1,
  })
  @IsOptional()
  @Transform(({ value }) => value ? parseInt(value) : value)
  @IsNumber()
  id_equipo?: number;

  @ApiPropertyOptional({
    description: 'ID de la línea',
    example: 1,
  })
  @IsOptional()
  @Transform(({ value }) => value ? parseInt(value) : value)
  @IsNumber()
  id_linea?: number;
}

export class ReportResponseDto {
  @ApiProperty({
    description: 'Datos del reporte',
    example: [],
  })
  data: any[];
}