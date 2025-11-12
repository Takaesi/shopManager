import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Обработчик отправки формы реги
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Предотвращает перезагрузку страницы
    try {
      type RegisterResponse = {
        message: string;
      };
      const res = await axios.post<RegisterResponse>(
        "http://localhost:3000/register",
        {
          name: name,
          email: email,
          password: password,
        }
      );
      setMessage(res.data.message);
      navigate("/login");
    } catch (error) {
      console.error(error);
      setMessage("Ошибка регистрации");
    }
  };

  return (
    <div>
        <h2>Регистрация</h2>
      <main>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Зарегестироваться</button>
        </form>
        <p>{message}</p>
        <Link to="/login">Уже есть аккаунт?</Link>
      </main>
    </div>
  );
}
