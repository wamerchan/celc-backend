import { Module } from '@nestjs/common';
import { RevisionesController } from './revisiones.controller';
import { RevisionesService } from './revisiones.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [RevisionesController],
  providers: [RevisionesService],
})
export class RevisionesModule {}