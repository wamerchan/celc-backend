import { Module } from '@nestjs/common';
import { MetricasController } from './metricas.controller';
import { MetricasService } from './metricas.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [MetricasController],
  providers: [MetricasService],
})
export class MetricasModule {}
