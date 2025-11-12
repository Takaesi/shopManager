import { Router } from "express";
import bcrypt from "bcryptjs";
import { prisma } from "../database.ts";


const router = Router();

router.post("/register", async  (req, res) => {
    const {name, email,  password} = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({message: "Заполните все поля"});
    }

    const hashed = await bcrypt.hash(password, 10);
    await prisma.customer.create({
        data: {
            name,
            email,
            password: hashed
        }
    })
    res.status(201).json({message: "Пользователь успешно зарегистрирован"});
})