"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const departamento = await prisma.departamento.create({
        data: {
            nombre: 'Tecnología',
        },
    });
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
//# sourceMappingURL=seeder.js.map