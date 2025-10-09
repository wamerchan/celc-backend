import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUsuarioDto {
  @ApiProperty({
    description: 'Nombre completo del usuario',
    example: 'María González',
  })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({
    description: 'Correo electrónico del usuario',
    example: 'maria.gonzalez@empresa.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Contraseña del usuario (mínimo 6 caracteres)',
    example: 'securepass123',
    minLength: 6,
  })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({
    description: 'ID del rol del usuario (1: Administrador, 2: Técnico)',
    example: 2,
    enum: [1, 2],
  })
  @IsNumber()
  id_rol: number;
}

export class UpdateUsuarioDto {
  @ApiPropertyOptional({
    description: 'Nombre completo del usuario',
    example: 'María González',
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  nombre?: string;

  @ApiPropertyOptional({
    description: 'Correo electrónico del usuario',
    example: 'maria.gonzalez@empresa.com',
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({
    description: 'ID del rol del usuario (1: Administrador, 2: Técnico)',
    example: 2,
    enum: [1, 2],
  })
  @IsOptional()
  @IsNumber()
  id_rol?: number;
}

export class UsuarioResponseDto {
  @ApiProperty({
    description: 'ID único del usuario',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Nombre completo del usuario',
    example: 'María González',
  })
  nombre: string;

  @ApiProperty({
    description: 'Correo electrónico del usuario',
    example: 'maria.gonzalez@empresa.com',
  })
  email: string;

  @ApiProperty({
    description: 'ID del rol del usuario',
    example: 2,
  })
  id_rol: number;

  @ApiProperty({
    description: 'Fecha de creación del usuario',
    example: '2023-10-01T10:00:00Z',
  })
  fecha_creacion: Date;

  @ApiPropertyOptional({
    description: 'Último login del usuario',
    example: '2023-10-08T15:30:00Z',
  })
  ultimo_login?: Date;
}