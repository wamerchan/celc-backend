import { Module } from '@nestjs/common';
import { LineasController } from './lineas.controller';
import { LineasService } from './lineas.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [LineasController],
  providers: [LineasService],
})
export class LineasModule {}