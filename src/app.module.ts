import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { LineasModule } from './lineas/lineas.module';
import { EquiposModule } from './equipos/equipos.module';
import { AsignacionesModule } from './asignaciones/asignaciones.module';
import { RevisionesModule } from './revisiones/revisiones.module';
import { ReportesModule } from './reportes/reportes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    AuthModule,
    UsuariosModule,
    LineasModule,
    EquiposModule,
    AsignacionesModule,
    RevisionesModule,
    ReportesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
