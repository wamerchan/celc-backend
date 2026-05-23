import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(private configService: ConfigService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
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
      (req as any).user = decoded;
      next();
    } catch (error) {
      console.warn('JwtMiddleware token verificación fallida:', {
        message: error?.message || 'unknown',
        token: token?.slice(0, 8) + '...'
      });
      throw new UnauthorizedException('Token inválido');
    }
  }
}