import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();
      message =
        typeof exceptionResponse === 'object'
          ? (exceptionResponse as any).message || exception.message
          : exception.message;
    } else if (exception instanceof Error) {
      message = exception.message;
      
      // Catch Prisma Unique Constraint Violations
      if ((exception as any).code === 'P2002') {
        status = HttpStatus.CONFLICT;
        message = 'Ya existe un registro con este valor único.';
        const targets = (exception as any).meta?.target;
        if (Array.isArray(targets) || typeof targets === 'string') {
          const targetStr = String(targets).toLowerCase();
          if (targetStr.includes('telefono') || targetStr.includes('linea')) {
            message = 'El número de teléfono ya está registrado.';
          } else if (targetStr.includes('serie') || targetStr.includes('equipo')) {
            message = 'El número de serie del equipo ya está registrado.';
          } else if (targetStr.includes('imei')) {
            message = 'El IMEI del equipo ya está registrado.';
          } else if (targetStr.includes('correo') || targetStr.includes('email')) {
            message = 'El correo electrónico ya está registrado.';
          } else if (targetStr.includes('cedula')) {
            message = 'La cédula ingresada ya está registrada.';
          }
        }
      } else if ((exception as any).code === 'P2003') {
        status = HttpStatus.CONFLICT;
        message = 'No se puede eliminar o modificar este registro porque tiene dependencias activas (está asociado a otros datos en el sistema).';
      }
    }

    console.error('Exception:', exception);

    response.status(status).json({
      statusCode: status,
      message,
      timestamp: new Date().toISOString(),
    });
  }
}
