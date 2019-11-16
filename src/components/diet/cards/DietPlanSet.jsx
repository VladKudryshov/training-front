import React from 'react';
import "../index.css"
import DietPlanCard from "./DietPlanCard";

const DietPlanSet = () => (
    <div className="slide-card">
        <i className="fas fa-arrow-circle-left"/>
        <div className="set-days">
            <DietPlanCard/>
        </div>
        <i className="fas fa-arrow-circle-right"/>
    </div>

)
export default DietPlanSet;

