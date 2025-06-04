import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DepartamentoService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: { nombre: string }) {
    return this.prisma.departamento.create({
      data,
    });
  }

  findAll() {
    return this.prisma.departamento.findMany({
      include: { empleados: true },
    });
  }

  findOne(id: number) {
    return this.prisma.departamento.findUnique({
      where: { id },
      include: { empleados: true },
    });
  }

  update(id: number, data: { nombre: string }) {
    return this.prisma.departamento.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.departamento.delete({
      where: { id },
    });
  }
}