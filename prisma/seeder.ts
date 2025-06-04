import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Crear un departamento
  const departamento = await prisma.departamento.create({
    data: {
      nombre: 'Tecnología',
    },
  });

  // Crear empleados en ese departamento
  await prisma.empleado.createMany({
    data: [
      {
        nombre: 'Carlos Paredes',
        email: 'carlos@TrainIT.com',
        cargo: 'Fullstack Developer',
        salario: 30,
        departamentoId: departamento.id,
      },
      {
        nombre: 'Ana Torres',
        email: 'ana@trainIt.com',
        cargo: 'Frontend Developer',
        salario: 1400,
        departamentoId: departamento.id,
      },
    ],
  });
}

main()
  .then(() => console.log('🌱 Datos insertados correctamente'))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());