import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createKardexEntry(data) {

    return prisma.kardex.create({
        data
    });
}