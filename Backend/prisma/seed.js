import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {

    const adminRole = await prisma.role.create({
        data: {
            nombre: 'admin'
        }
    });

    const password = await bcrypt.hash('123456', 10);

    await prisma.usuario.create({
        data: {
            nombre: 'Administrador',
            email: 'admin@test.com',
            password,
            roleId: adminRole.id
        }
    });
}

main();