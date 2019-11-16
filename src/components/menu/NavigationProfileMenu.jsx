import React from 'react';
import './index.css';
import {Link} from "react-router";


const NavigationProfileMenu = () => (
    <ul className="profile-menu">
        <li><i className="far fa-user mr10"></i><Link to="/profile">Профиль</Link></li>
        <li><i className="far fa-address-book mr10"></i><Link to="/profile">Клиенты</Link></li>
        <li><i className="far fa-comment mr10"></i><Link to="/chat">Сообщения</Link></li>
        <li><i className="far fa-clipboard mr10"></i><Link to="/training">Программы тренировок</Link></li>
        <li><i className="fas fa-concierge-bell mr10"></i><Link to="/diet">Программы питания</Link></li>
        <li><i className="far fa-calendar mr10"></i><Link to="/calendar">Календарь</Link></li>
        <li><i className="fas fa-trophy mr10"></i><Link to="/scores">Достижения</Link></li>
    </ul>
)
export default NavigationProfileMenu;

