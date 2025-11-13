import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async(e: React.FormEvent) => {
        console.log("handleSubmit вызван", { email, password });
        e.preventDefault();

        try {
            type LoginResponse = {
                message: string
                token: string
            }

            const res = await axios.post<LoginResponse>("http://localhost:3000/login", {
                email,
                password
            })

            localStorage.setItem("token", res.data.token)
            setMessage(res.data.message)
            navigate("/dashboard")

        }catch(error){
            console.log("Ошибка",error)
        }
    }

    return (
        <div>
            <h2>Вход</h2>
            <main>
                <form onSubmit={handleSubmit}>
                    <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                    />
                    <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

                    />
                    <button type="submit">Войти</button>
                </form>
                <p>{message}</p>
                <Link to="/register">Нет аккаунта</Link>
            </main>
        </div>
    )
}