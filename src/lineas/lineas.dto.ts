import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateLineaDto {
  @ApiProperty({
    description: 'Nombre de la línea de producción',
    example: 'Línea de Ensamblaje 1',
  })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({
    description: 'Descripción de la línea',
    example: 'Línea dedicada al ensamblaje de productos electrónicos',
  })
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @ApiProperty({
    description: 'Ubicación de la línea',
    example: 'Planta Norte, Sector A',
  })
  @IsString()
  @IsNotEmpty()
  ubicacion: string;
}

export class UpdateLineaDto {
  @ApiPropertyOptional({
    description: 'Nombre de la línea de producción',
    example: 'Línea de Ensamblaje 1',
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  nombre?: string;

  @ApiPropertyOptional({
    description: 'Descripción de la línea',
    example: 'Línea dedicada al ensamblaje de productos electrónicos',
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  descripcion?: string;

  @ApiPropertyOptional({
    description: 'Ubicación de la línea',
    example: 'Planta Norte, Sector A',
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  ubicacion?: string;

  @ApiPropertyOptional({
    description: 'Estado de la línea (1: Activa, 0: Inactiva)',
    example: 1,
    enum: [0, 1],
  })
  @IsOptional()
  @IsNumber()
  estado?: number;
}

export class LineaResponseDto {
  @ApiProperty({
    description: 'ID único de la línea',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Nombre de la línea de producción',
    example: 'Línea de Ensamblaje 1',
  })
  nombre: string;

  @ApiProperty({
    description: 'Descripción de la línea',
    example: 'Línea dedicada al ensamblaje de productos electrónicos',
  })
  descripcion: string;

  @ApiProperty({
    description: 'Ubicación de la línea',
    example: 'Planta Norte, Sector A',
  })
  ubicacion: string;

  @ApiProperty({
    description: 'Estado de la línea',
    example: 1,
  })
  estado: number;

  @ApiProperty({
    description: 'Fecha de creación de la línea',
    example: '2023-10-01T10:00:00Z',
  })
  fecha_creacion: Date;
}