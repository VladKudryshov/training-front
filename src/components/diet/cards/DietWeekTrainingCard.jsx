import React from 'react';
import "../index.css"
import {Link} from "react-router";

const DietWeekTrainingCard = ({parentPath, weekOfTraining, weekid}) => (

    <div className="week-card">
        <h4><Link to={{pathname : `${parentPath}/${weekid}`}}>{weekOfTraining}</Link></h4>
        <img
            src="https://img.freepik.com/free-vector/abstract-dynamic-pattern-wallpaper-vector_53876-59131.jpg?size=338&ext=jpg"
            alt=""/>
        <div className="kv"/>
    </div>

)
export default DietWeekTrainingCard;

