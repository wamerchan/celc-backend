"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
let AllExceptionsFilter = class AllExceptionsFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        let status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Internal server error';
        if (exception instanceof common_1.HttpException) {
            status = exception.getStatus();
            const exceptionResponse = exception.getResponse();
            message =
                typeof exceptionResponse === 'object'
                    ? exceptionResponse.message || exception.message
                    : exception.message;
        }
        else if (exception instanceof Error) {
            message = exception.message;
            if (exception.code === 'P2002') {
                status = common_1.HttpStatus.CONFLICT;
                message = 'Ya existe un registro con este valor único.';
                const targets = exception.meta?.target;
                if (Array.isArray(targets) || typeof targets === 'string') {
                    const targetStr = String(targets).toLowerCase();
                    if (targetStr.includes('telefono') || targetStr.includes('linea')) {
                        message = 'El número de teléfono ya está registrado.';
                    }
                    else if (targetStr.includes('serie') || targetStr.includes('equipo')) {
                        message = 'El número de serie del equipo ya está registrado.';
                    }
                    else if (targetStr.includes('imei')) {
                        message = 'El IMEI del equipo ya está registrado.';
                    }
                    else if (targetStr.includes('correo') || targetStr.includes('email')) {
                        message = 'El correo electrónico ya está registrado.';
                    }
                    else if (targetStr.includes('cedula')) {
                        message = 'La cédula ingresada ya está registrada.';
                    }
                }
            }
            else if (exception.code === 'P2003') {
                status = common_1.HttpStatus.CONFLICT;
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
};
exports.AllExceptionsFilter = AllExceptionsFilter;
exports.AllExceptionsFilter = AllExceptionsFilter = __decorate([
    (0, common_1.Catch)()
], AllExceptionsFilter);
//# sourceMappingURL=http-exception.filter.js.map