import React from 'react';
import "../index.css"
import DietInfo from "./DietInfo";
import DietDayEating from "./DietDayEating";

const DietDay = ({openModal, dietDay}) => (

    <div className="mrtop10 gap">
        <div className="diet-header">
            <DietInfo stat={dietDay.stat}/>
            <div className="diet-actions">
                <i className="fas fa-concierge-bell add-eating simple-hover " onClick={() => openModal("eating")}/>
                <i className="fas fa-glass-whiskey add-water simple-hover " onClick={() => openModal("water")}/>
            </div>
        </div>
        {console.log(dietDay)}
        <DietDayEating eatingList={dietDay.eatingList} openModal={openModal}/>
    </div>
)
export default DietDay;

