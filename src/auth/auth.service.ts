import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { DatabaseService } from '../database/database.service';
import { ConfigService } from '@nestjs/config';
import { User } from './user.interface';

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
  }) {
    const hashedPassword: string = await (bcrypt as any).hash(userData.password, 10);
    const sql =
      'INSERT INTO Usuarios (nombres, apellidos, correo_electronico, contrasena_hash, id_rol, fecha_creacion) VALUES (?, ?, ?, ?, ?, NOW())';
    await this.databaseService.query(sql, [
      userData.nombre,
      '',
      userData.email,
      hashedPassword,
      userData.id_rol,
    ]);
    return { message: 'Usuario registrado exitosamente' };
  }

  async login(email: string, password: string) {
    const sql = 'SELECT * FROM Usuarios WHERE correo_electronico = ?';
    const users: User[] = await this.databaseService.query(sql, [email]) as User[];
    if (users.length === 0) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
    const user = users[0];
    const isPasswordValid: boolean = await (bcrypt as any).compare(password, user.contrasena_hash);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
    // Actualizar ultimo_login
    const updateSql = 'UPDATE Usuarios SET ultimo_login = NOW() WHERE id_usuario = ?';
    await this.databaseService.query(updateSql, [user.id_usuario]);
    const secret = this.configService.get<string>('JWT_SECRET');
    if (!secret) {
      throw new Error('JWT_SECRET not configured');
    }
    const token: string = (jwt as any).sign(
      { id: user.id_usuario, email: user.correo_electronico, id_rol: user.id_rol },
      secret,
      { expiresIn: '1h' },
    );
    return {
      token,
      user: {
        id: user.id_usuario,
        nombre: user.nombres,
        email: user.correo_electronico,
        rol:
          user.id_rol === 1
            ? 'Administrador'
            : user.id_rol === 2
              ? 'Técnico'
              : 'Empleado',
      },
    };
  }
}