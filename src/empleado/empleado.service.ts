import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EmpleadoService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: {
    nombre: string;
    email: string;
    cargo: string;
    salario: number;
    departamentoId: number;
  }) {
    return this.prisma.empleado.create({
      data,
    });
  }

  findAll() {
    return this.prisma.empleado.findMany({
      include: {
        departamento: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.empleado.findUnique({
      where: { id },
      include: {
        departamento: true,
      },
    });
  }

  update(
    id: number,
    data: {
      nombre?: string;
      email?: string;
      cargo?: string;
      salario?: number;
      departamentoId?: number;
    },
  ) {
    return this.prisma.empleado.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.empleado.delete({
      where: { id },
    });
  }
}