// prisma.module.ts
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Opcional: para que esté disponible en toda la app sin importar importaciones
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
