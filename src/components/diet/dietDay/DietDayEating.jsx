import React from 'react';
import "../index.css"
import Eating from "./Eating";

const DietDayEating = ({eatingList, openModal}) => (
    <div className="meals">
        {eatingList.map(eating => <Eating eating={eating} openModal={openModal}/>)}
    </div>
)
export default DietDayEating;

