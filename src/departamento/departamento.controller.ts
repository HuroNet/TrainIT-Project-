import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { DepartamentoService } from './departamento.service';

@Controller('departamentos')
export class DepartamentoController {
  constructor(private readonly departamentoService: DepartamentoService) {}

  @Post()
  create(@Body() body: { nombre: string }) {
    return this.departamentoService.create(body);
  }

  @Get()
  findAll() {
    return this.departamentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departamentoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: { nombre: string }) {
    return this.departamentoService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departamentoService.remove(+id);
  }
}
