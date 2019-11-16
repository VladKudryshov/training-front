import React, {Component} from 'react';
import EventCard from "./EventCard";
import "../index.css"


const ListEvents = () => (
    <ul className="events gap">
        <EventCard/>
    </ul>
)
export default ListEvents;

