import React from 'react';
import "./index.css"
import DietWeekDayCard from "./cards/DietWeekDayCard";

const DietWeek = (match) => (
    <div className="child card">
        <div className="card-header">
            <h2><strong>Неделя</strong> {match.params.weekid}</h2>

        </div>
        <div className="card-content">
            <div className="set-days">
                <DietWeekDayCard parentPath={match.location.pathname} dayOfWeek="monday"/>
                <DietWeekDayCard parentPath={match.location.pathname} dayOfWeek="tuesday"/>
                <DietWeekDayCard parentPath={match.location.pathname} dayOfWeek="wednesday"/>
                <DietWeekDayCard parentPath={match.location.pathname} dayOfWeek="thursday"/>
                <DietWeekDayCard parentPath={match.location.pathname} dayOfWeek="friday"/>
                <DietWeekDayCard parentPath={match.location.pathname} dayOfWeek="saturday"/>
                <DietWeekDayCard parentPath={match.location.pathname} dayOfWeek="sunday"/>
            </div>
        </div>

    </div>

)
export default DietWeek;

