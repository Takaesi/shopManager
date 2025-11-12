// обработка запросов по клиентам

import type { Request, Response } from "express";
import * as customerService from "../servise/customerServise.ts";

// получить всех клиентов
export const getAllCustomers = async (req: Request, res: Response) => {
  const customer = await customerService.getAllCustomersFromTable();
  res.json(customer);
};

// получить клиента по id
export const getByIDCustomer = async (req: Request, res: Response) => {
  const customer = await customerService.getByIdCustomerFromTable(
    Number(req.params.id)
  );
  res.json(customer);
};

// создать нового клиента
export const createNewCustomer = async (req: Request, res: Response) => {
  const customer = await customerService.createCustomerInTable(req.body);
  res.status(201).json(customer);
};

// обновить данные клиента по id
export const updateCustomerById = async (req: Request, res: Response) => {
  const customer = await customerService.updateCustomerInTable(
    Number(req.params.id),
    req.body
  );
  res.json(customer);
};

// удалить двнные клиента по id
export const deleteCustomerById = async (req: Request, res: Response) => {
  const customer = await customerService.daleteCustomerInTable(
    Number(req.params.id)
  );
  res.status(201).send();
};
