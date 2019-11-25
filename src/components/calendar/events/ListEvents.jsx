import React, {Component} from 'react';
import EventCard from "./EventCard";
import "../index.css"


const ListEvents = ({events}) => (
    <ul className="events gap">
        <li><button className="btn btn-reg">Добавить событие</button></li>
        {events.map(event=><EventCard event = {event}/>)}
    </ul>
)
export default ListEvents;

