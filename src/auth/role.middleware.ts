import { Injectable, NestMiddleware, ForbiddenException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RoleMiddleware implements NestMiddleware {
  constructor(private readonly requiredRoles: number[]) {}

  use(req: Request, res: Response, next: NextFunction) {
    const user = (req as any).user;
    if (!user || !this.requiredRoles.includes(user.id_rol)) {
      throw new ForbiddenException('Acceso denegado');
    }
    next();
  }
}