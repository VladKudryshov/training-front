import React from 'react';
import "../index.css"

const EventCard = () => (
    <li className="event-card event">
        <ul className="event-times">
            <li className="event-start">23:23</li>
            <li className="event-stop">23:50</li>
        </ul>
        <div className="event-priority event-latest"></div>
        <div className="event-user">Row Attribute</div>
        <div className="event-service">Service</div>
    </li>
)
export default EventCard;

