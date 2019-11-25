import React from 'react';
import DietInfo from "../diet/dietDay/DietInfo";
import Dish from "../diet/dish/Dish";
import CatalogDishesContainer from "../../containers/CatalogDishesContainer";
import Link from "react-router/es/Link";

const Auth = () => (
    <div className="reg">
        <h2>Вход в аккаунт</h2>
        <input type="text" className="email" placeholder="E-mail"/>
        <input type="text" className="pass full-grid" placeholder="Пароль"/>
        <Link to="/forgot">Забыли пароль?</Link>
        <button className="btn full btn-reg ">Создать аккаунт</button>
    </div>
)
export default Auth;

