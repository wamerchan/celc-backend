import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { DatabaseService } from '../database/database.service';
import { ConfigService } from '@nestjs/config';

const ROLE_MAP: Record<number, string> = {
  1: 'Administrador',
  2: 'Técnico',
  3: 'Empleado',
};

@Injectable()
export class AuthService {
  constructor(
    private databaseService: DatabaseService,
    private configService: ConfigService,
  ) {}

  async register(userData: {
    nombre: string;
    email: string;
    password: string;
    id_rol: number;
    cedula?: string;
  }) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    await this.databaseService.usuario.create({
      data: {
        nombres: userData.nombre,
        apellidos: '',
        correoElectronico: userData.email,
        contrasenaHash: hashedPassword,
        rolId: userData.id_rol,
        cedula: userData.cedula || Date.now().toString(),
      }
    });
    return { message: 'Usuario registrado exitosamente' };
  }

  async login(email: string, password: string) {
    const user = await this.databaseService.usuario.findUnique({
      where: { correoElectronico: email }
    });

    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
    
    const isPasswordValid = await bcrypt.compare(password, user.contrasenaHash);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
    
    // Actualizar ultimo_login
    await this.databaseService.usuario.update({
      where: { id: user.id },
      data: { ultimoLogin: new Date() }
    });
    
    const secret = this.configService.get<string>('JWT_SECRET');
    if (!secret) {
      throw new Error('JWT_SECRET not configured');
    }
    
    const token = jwt.sign(
      { id: user.id, email: user.correoElectronico, id_rol: user.rolId },
      secret,
      { expiresIn: '8h' },
    );
    
    return {
      token,
      user: this.buildUserProfile(user),
    };
  }

  /**
   * Retorna el perfil completo del usuario por ID.
   * Mismo formato que el objeto `user` retornado por login.
   */
  async getProfile(userId: number) {
    const user = await this.databaseService.usuario.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    return this.buildUserProfile(user);
  }

  private buildUserProfile(user: {
    id: number;
    nombres: string;
    apellidos: string;
    correoElectronico: string;
    rolId: number;
  }) {
    return {
      id: user.id,
      nombres: user.nombres,
      apellidos: user.apellidos,
      email: user.correoElectronico,
      rol: ROLE_MAP[user.rolId] ?? 'Empleado',
      rolId: user.rolId,
    };
  }
}