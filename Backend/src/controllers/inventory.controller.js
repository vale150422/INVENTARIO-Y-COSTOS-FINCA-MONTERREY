import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getInsumos = async(req, res) => {

    const insumos = await prisma.insumo.findMany({
        include: {
            lotes: true
        }
    });
    res.json(insumos);
};

export const createInsumo = async(req, res) => {

    try {

        const insumo = await prisma.insumo.create({
            data: req.body
        });

        res.status(201).json(insumo);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};