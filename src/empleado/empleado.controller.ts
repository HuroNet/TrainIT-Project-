import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';

@Controller('empleados')
export class EmpleadoController {
  constructor(private readonly empleadoService: EmpleadoService) {}

  @Post()
  create(@Body() body: {
    nombre: string;
    email: string;
    cargo: string;
    salario: number;
    departamentoId: number;
  }) {
    return this.empleadoService.create(body);
  }

  @Get()
  findAll() {
    return this.empleadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empleadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: {
    nombre?: string;
    email?: string;
    cargo?: string;
    salario?: number;
    departamentoId?: number;
  }) {
    return this.empleadoService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empleadoService.remove(+id);
  }
}
