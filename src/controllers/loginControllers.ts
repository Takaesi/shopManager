import { type Request, type Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import { prisma } from "../database.ts";
import { message } from "antd";

export const login = async (req: Request, res: Response) => {
    const {email, password} = req.body

    try {
        if (!email || !password) {
            return res.status(400).json({message: "Ввудите email и пароль"})
        }

        const user = await prisma.customer.findUnique({where: {email}})

        if (!user) {
            return res.status(400).json({message: "Пользователь не найден"})
        }

        const isValid = bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.status(401).json({message: "Пароль не верный"})
        }

        const token = jwt.sign(
            { id: user.id, email: user.email }, // payload
            process.env.JWT_SECRET || "secret_key", // секрет
            { expiresIn: "1h" } // опции
        )

        return res.json({message: "Успешный вход", token})
        
    } catch(error){
        console.log("Ошибка:", error)
        return res.status(500).json({message: "Ошибка на сервере"})
    }
}