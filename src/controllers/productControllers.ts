import type { Request, Response } from "express";
import * as  productServise from '../servise/productServise.ts'

export const getAllProducts = async (rec: Request, res: Response) => {
    const product = await productServise.getAllProductsFromTable();
    res.json(product)
}

export const getProduct = async (rec: Request, res: Response) => {
    const product = await productServise.getProductById(Number(rec.params.id))
    res.json(product)
}

export const addProduct = async (rec: Request, res: Response) => {
    const product = await productServise.addProductInTable(rec.body)
    res.status(201).json(product)
}

export const updataProduct = async (rec:Request, res: Response) => {
    const product = await productServise.updateProductInTable(Number(rec.params.id), rec.body)
    res.status(201).json(product)
}

export const deleteProduct = async (rec:Request, res: Response) => {
    const product = await productServise.deleteProdactFromTable(Number(rec.params.id))
    res.status(201).send()
}