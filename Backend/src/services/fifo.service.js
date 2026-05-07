import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function applyFIFO(insumoId, cantidadSalida) {

    const lotes = await prisma.lote.findMany({
        where: {
            insumoId,
            cantidadActual: {
                gt: 0
            }
        },
        orderBy: {
            fechaIngreso: 'asc'
        }
    });

    let restante = cantidadSalida;
    let costoTotal = 0;

    for (const lote of lotes) {

        if (restante <= 0) break;

        const consumir = Math.min(
            lote.cantidadActual,
            restante
        );

        costoTotal += consumir * lote.costoUnitario;
        await prisma.lote.update({
            where: {
                id: lote.id
            },
            data: {
                cantidadActual: lote.cantidadActual - consumir
            }
        });

        restante -= consumir;
    }

    if (restante > 0) {
        throw new Error('Stock insuficiente');
    }

    return costoTotal;
}