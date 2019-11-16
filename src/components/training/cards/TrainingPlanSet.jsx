import React from 'react';
import "../index.css"
import TrainingPlanCard from "./TrainingPlanCard";

const TrainingPlanSet = () => (
    <div className="slide-card">
        <i className="fas fa-arrow-circle-left"/>
        <div className="set-days">
            <TrainingPlanCard/>
        </div>
        <i className="fas fa-arrow-circle-right"/>
    </div>

)
export default TrainingPlanSet;

