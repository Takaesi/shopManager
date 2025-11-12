import type { Request, Response } from "express";

import * as orderServise from "../servise/ordersServise.ts"

export const getAllOrders = async (req:Request, res: Response) =>{
    const order = await orderServise.getAllOrdersFromTable()
    res.json(order)
}


export const getByIdOrder = async (req: Request, res: Response) => {
    const order  = await orderServise.getByIdOrderFromTable(Number(req.params.id))
    res.json(order)
}

export const addNewOrder = async (req: Request, res: Response) => {
    const order = await orderServise.addNewOrderInTable(req.body)
    res.status(201).json(order)
}

export const updataOrder = async (req: Request, res: Response) => {
    const order = await orderServise.updateOrderInTable(Number(req.params.id), req.body) 
    res.json(order)
}

export const deleteOrder = async (req: Request, res: Response) => {
    const order = await orderServise.deliteOrderInTable(Number(req.params.id))
    res.status(201).send()
}