import React from 'react';
import "./index.css"
import DietInfo from "./DietInfo";

const Content = ({openModal, stat}) => (


    <div className="mrtop10 gap">
        <div className="diet-header">
            <DietInfo stat={stat}/>
            <div className="diet-actions">
                <i className="fas fa-concierge-bell add-eating hover " onClick={() => openModal("eating")}/>
                <i className="fas fa-glass-whiskey add-water hover " onClick={() => openModal("water")}/>
            </div>
        </div>

        <div className="meals">
            <div className="meal hover " onClick={() => openModal("info")}>
                <i className="fas fa-concierge-bell"/>
                <div className="meal-name hover">asdasds</div>
                <ul className="nutritional-value">
                    <li>Белков: 30</li>
                    <li>Жиров: 30</li>
                    <li>Углеводов: 30</li>
                    <li>Калорий: 30</li>
                    <li>Воды: 30</li>
                </ul>
                <div className="time">20:20</div>

            </div>
        </div>
    </div>
)
export default Content;

