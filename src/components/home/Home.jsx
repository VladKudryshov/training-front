import React from 'react';
import "./index.css"
import Link from "react-router/es/Link";

const Home = () => (
    <div className="reg-type">
        <div>
            <img src="https://www.colourbox.com/preview/5826697-weight-lifter.jpg" alt=""/>
            <h2>Для клиента</h2>
            <ul className="properties">
                <li>Тренируйтесь согласно плану</li>
                <li>Ведите отчет о еде</li>
                <li>Общайтесь с людьми или тренерами</li>
                <li>Совершенствуйте свое тело</li>
            </ul>
            <Link className="btn btn-reg" to={{pathname: 'registration'}}>Регистрация</Link>


        </div>
        <div>
            <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29733137.jpg" alt=""/>
            <h2>Для тренера</h2>
            <ul className="properties">
                <li>Составляйте программы тренировок</li>
                <li>Составляйте программы диет</li>
                <li>Ведите учет процесса</li>
                <li>Общайтесь с клиентами</li>
            </ul>
            <Link className="btn btn-reg" to={{pathname: 'registration'}}>Регистрация</Link>

        </div>
    </div>
)
export default Home;

