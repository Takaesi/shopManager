// логика работы с бд по клиентам
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// получить всех клиентов
export const getAllCustomersFromTable = async () => {
  return await prisma.customer.findMany();
};

// получить клиента по id
export const getByIdCustomerFromTable = async (id: number) => {
  return await prisma.customer.findUnique({
    where: { id },
  });
};

// создать нового клиента
export const createCustomerInTable = async (data: any) => {
  return await prisma.customer.create({ data });
};

// обновить данные клиента по id
export const updateCustomerInTable = async (id: number, data: any) => {
  return await prisma.customer.update({
    where: { id },
    data,
  });
};

// удалить клиента по id
export const daleteCustomerInTable = async (id: number) => {
  return await prisma.customer.deleteMany({
    where: { id },
  });
};
