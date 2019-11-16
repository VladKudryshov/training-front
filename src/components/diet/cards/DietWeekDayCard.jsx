import React, {Component} from 'react';
import "../index.css"
import {Link} from "react-router";

const DietWeekDayCard = ({parentPath, dayOfWeek}) => (

    <div className="week-card">
        <h4><Link to={{pathname : `${parentPath}/${dayOfWeek}`}}>{dayOfWeek}</Link></h4>
        <img
            src="https://img.freepik.com/free-vector/abstract-dynamic-pattern-wallpaper-vector_53876-59131.jpg?size=338&ext=jpg"
            alt=""/>
        <div className="kv"/>
    </div>

)
export default DietWeekDayCard;

