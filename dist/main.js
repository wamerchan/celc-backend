"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors();
    const config = new swagger_1.DocumentBuilder()
        .setTitle('CELC API')
        .setDescription('API para el sistema de gestión de líneas de producción CELC (Centro de Excelencia en Logística y Calidad)')
        .setVersion('1.0')
        .addTag('auth', 'Endpoints de autenticación y autorización')
        .addTag('usuarios', 'Gestión de usuarios del sistema')
        .addTag('lineas', 'Gestión de líneas de producción')
        .addTag('equipos', 'Gestión de equipos y maquinaria')
        .addTag('asignaciones', 'Gestión de asignaciones de equipos a líneas')
        .addTag('revisiones', 'Gestión de revisiones y mantenimientos')
        .addTag('reportes', 'Generación de reportes y estadísticas')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
    }, 'JWT-auth')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document, {
        swaggerOptions: {
            persistAuthorization: true,
            tagsSorter: 'alpha',
            operationsSorter: 'alpha',
        },
    });
    await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
//# sourceMappingURL=main.js.map