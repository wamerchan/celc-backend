import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({
    description: 'Nombre completo del usuario',
    example: 'Juan Pérez',
  })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({
    description: 'Correo electrónico del usuario',
    example: 'juan.perez@empresa.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Contraseña del usuario (mínimo 6 caracteres)',
    example: 'password123',
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

export class LoginDto {
  @ApiProperty({
    description: 'Correo electrónico del usuario',
    example: 'juan.perez@empresa.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Contraseña del usuario',
    example: 'password123',
  })
  @IsString()
  password: string;
}