import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpleadoModule } from './empleado/empleado.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [EmpleadoModule, DepartamentoModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
