import "./home.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <header>
        <p className="name">ShopManager</p>
        <nav className="headerFlex">
          <Link to="/login" className="btn">
            Login
          </Link>
          <Link to="/register" className="btn">
            Register
          </Link>
        </nav>
      </header>
      <main>
        <h1 className="mainH1">About functional:</h1>
        <div className="mainFlex">
            <div className="card">
                <h2>Клиенты</h2>
                <ul>
                    <li>Список клиентов</li>
                    <li>Поиск клиента</li>
                    <li>Добавить клиента</li>
                    <li>Редактировать клиента</li>
                    <li>Удалить клиента</li>
                </ul>
            </div>
            <div className="card">
                <h2>Продукты</h2>
                <ul>
                    <li>Список продуктов</li>
                    <li>Поиск продукта</li>
                    <li>Добавить продукт</li>
                    <li>Редактировать продукт</li>
                    <li>Удалить продукт</li>
                </ul>
            </div>
            <div className="card">
                <h2>Заказы</h2>
                <ul>
                    <li>Список заказов</li>
                    <li>Поиск заказа</li>
                    <li>Добавить заказ</li>
                    <li>Редактировать заказ</li>
                    <li>Удалить заказ</li>
                </ul>
            </div>
        </div>
      </main>
    </div>
  );
}
