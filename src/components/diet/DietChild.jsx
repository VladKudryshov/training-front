import React from 'react';
import "./index.css"
import Tooltip from "../utils/Tooltip";
import DietPlans from "./DietPlans";
import CurrentDietPlan from "./CurrentDietPlan";
import DietWeeksContainer from "../../containers/DietWeeksContainer";

const DietChild = ({isPlans, hide}) => (
    <div className="child card">
        <div className="card-header">
            <h2><strong>Программы</strong> питания</h2>
            <ul className="header-dropdown">
                <li>
                    <Tooltip tooltipMessage={isPlans ? "Скрыть планы" : "Сменить план"}>
                        <i className="fas fa-list-ul hover" onClick={hide}/>
                    </Tooltip>
                </li>
            </ul>
        </div>
        <div className="card-content">
            {
                isPlans ? <DietPlans/> : <DietWeeksContainer/>
            }
        </div>

    </div>

)
export default DietChild;

