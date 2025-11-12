import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllProductsFromTable = async () => {
    return await prisma.product.findMany()
}

export const getProductById = async (id: number) => {
    return await prisma.product.findUnique({
        where: {id}
    })
}

export const addProductInTable = async (data: any) => {
    return await prisma.product.create({data})
}

export const updateProductInTable = async (id: number, data: any) => {
    return await prisma.product.update({
        where: {id},
        data,
    })
}

export const deleteProdactFromTable = async (id: number) => {
    return await prisma.product.deleteMany({
        where: {id}
    })
}