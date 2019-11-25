import React from 'react';
import "../index.css"

const Eating = ({eating, openModal}) => (

    <div className="meal hover " onClick={() => openModal("info")}>
        <i className="fas fa-concierge-bell"/>
        <div className="meal-name hover">{eating.name}</div>
        <ul className="nutritional-value">
            <li>Белков: {eating.stat ? eating.stat.squirrels : 0}</li>
            <li>Жиров: {eating.stat ? eating.stat.fats : 0}</li>
            <li>Углеводов: {eating.stat ? eating.stat.carbohydrates : 0}</li>
            <li>Калорий: {eating.stat ? eating.stat.calories : 0}</li>
            <li>Воды: {eating.stat ? eating.stat.water : 0}</li>
        </ul>
        <div className="time">{eating.time}</div>
    </div>
)
export default Eating;

