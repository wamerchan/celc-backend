import { Controller, Get, Post, Put, Param, Body, UseGuards } from '@nestjs/common';
import { RevisionesService } from './revisiones.service';
import { JwtGuard } from '../auth/jwt.guard';

@Controller('api/revisiones')
@UseGuards(JwtGuard)
export class RevisionesController {
  constructor(private readonly revisionesService: RevisionesService) {}

  @Get()
  async findAll() {
    return this.revisionesService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.revisionesService.findById(+id);
  }

  @Post()
  async create(@Body() body: any) {
    return this.revisionesService.create(body);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    return this.revisionesService.update(+id, body);
  }
}