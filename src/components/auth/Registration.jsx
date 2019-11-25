import React from 'react';
import './index.css'
import Link from "react-router/es/Link";
import ModalContainer from "../../containers/ModalContainer";
const Registration = () => (
    <div className="reg">
        <ModalContainer/>
        <h2>Создание аккаунта</h2>
        <input type="text" className="email" placeholder="E-mail"/>
        <input type="text" className="login" placeholder="Логин"/>
        <input type="text" className="pass" placeholder="Пароль"/>
        <input type="text" className="pass" placeholder="Повторите пароль"/>
        <Link to="/signin">У меня есть аккаунт</Link>
        <button className="btn full btn-reg ">Создать аккаунт</button>
    </div>
)
export default Registration;

