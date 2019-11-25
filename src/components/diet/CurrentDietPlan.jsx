import React from 'react';
import "./index.css"
import DietWeekTrainingCard from "./cards/DietWeekTrainingCard";

const CurrentDietPlan = ({location, planId, weeks}) => (

    <div className="set-days">

        <DietWeekTrainingCard parentPath={location ? location.pathname : `/diet/${planId ? planId : 'default'}`} weekOfTraining="WEEK 1"
                              weekid={1}/>

    </div>
)
export default CurrentDietPlan;

