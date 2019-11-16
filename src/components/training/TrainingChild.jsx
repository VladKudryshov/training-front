import React from 'react';
import "./index.css"
import TrainingPlanSet from "./cards/TrainingPlanSet";
import TrainingPlans from "./TrainingPlans";
import TrainingPlan from "./TrainingPlan";
import Tooltip from "../utils/Tooltip";

const TrainingChild = ({isPlans, hide}) => (
    <div className="child card">
        <div className="card-header">
            <h2><strong>Программы</strong> тренеровок</h2>
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
                isPlans ? <TrainingPlans/> : <TrainingPlan/>
            }
        </div>

    </div>

)
export default TrainingChild;

