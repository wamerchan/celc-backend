import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/http-exception.filter';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Global exception filter
  app.useGlobalFilters(new AllExceptionsFilter());
  
  // Helmet for secure HTTP headers
  app.use(helmet());
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));
  
  // Configuración de CORS
  app.enableCors({
    origin: process.env.CORS_ORIGIN || [
      'http://localhost:5173',
      'http://localhost:3000',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // Configuración de Swagger
  const config = new DocumentBuilder()
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
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
    },
  });

  const port = process.env.PORT ?? 3001;
  await app.listen(port);
  console.log(`✅ Server running on http://localhost:${port}`);
}
void bootstrap();