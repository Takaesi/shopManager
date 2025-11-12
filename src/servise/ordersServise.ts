import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllOrdersFromTable = async () => {
    return await prisma.order.findMany()
}

export const getByIdOrderFromTable = async (id: number) => {
    return await prisma.order.findUnique({
        where: {id}
    })
}

export const addNewOrderInTable = async (data: any) => {
    return await prisma.order.create({
        data
    })
}

export const updateOrderInTable = async (id: number, data: any) => {
    return await prisma.order.update({
        where: {id},
        data,
    })
}

export const deliteOrderInTable = async (id: number) => {
    return await prisma.order.deleteMany({
        where: {id}
    })
}