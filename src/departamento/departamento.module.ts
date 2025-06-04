import { Module } from '@nestjs/common';
import { DepartamentoService } from './departamento.service';
import { DepartamentoController } from './departamento.controller';

@Module({
  providers: [DepartamentoService],
  controllers: [DepartamentoController]
})
export class DepartamentoModule {}
