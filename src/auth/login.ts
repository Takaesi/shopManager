import bcrypt from "bcryptjs";
import jwt, {type Secret,type SignOptions} from "jsonwebtoken";
import { prisma } from "../database.ts";
import dotenv from "dotenv";
import { Router } from "express";

dotenv.config();
const router = Router();

router.post("/login", async (req, res)=> {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({message: "Заполните все поля"});
    }

    const user = await prisma.customer.findUnique({
        where: {email}
    })

    if(!user) {
        return res.status(400).json({message: "Пользователь не найден"});
    }

    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid){
        return res.status(400).json({message: "Пользователь не найден"})
    }

    const secret: Secret = process.env.JWT_SECRET ?? "default_secret";
    const options: SignOptions = { expiresIn: process.env.JWT_EXPIRES_IN as any || "1h" };
    const token = jwt.sign({ userId: user.id, email: user.email }, secret, options);
    res.json({ token, userId: user.id, name: user.name });
})