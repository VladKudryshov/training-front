import React from 'react';
import "../index.css"

const EventCard = ({event}) => (
    <li className="event-card event">
        <ul className="event-times">
            <li className="event-start">{event.name}</li>
            <li className="event-stop">{event.date}</li>
        </ul>
        <div className="event-time">{event.time}</div>
    </li>
)
export default EventCard;

