import React from 'react';
import CalendarPlanner from "./planner/CalendarPlanner";
import ListEvents from "./events/ListEvents";
import EventDescription from "./events/EventDescription";
import "./index.css"

const Calendar = () => (
    <div className="calendar-b gap">
        <CalendarPlanner/>
        <ListEvents/>
        <EventDescription/>
    </div>
)
export default Calendar;

