import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(private configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Token no proporcionado');
    }
    const token = authHeader.substring(7);
    try {
      const secret = this.configService.get<string>('JWT_SECRET');
      if (!secret) {
        throw new UnauthorizedException('JWT_SECRET no configurado');
      }
      const decoded = (jwt as any).verify(token, secret);
      request.user = decoded;
      return true;
    } catch (error) {
      // Ayuda en debugging si token no existe, expiró o tiene firma inválida
      console.warn('JwtGuard token verificación fallida:', {
        message: error?.message || 'unknown',
        token: token?.slice(0, 8) + '...'
      });
      throw new UnauthorizedException('Token inválido');
    }
  }
}