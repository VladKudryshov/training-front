import React, {Component} from 'react';
import "../index.css"


const EventDescription = () => (

    <div className="card event-information gap">

        <div className="card-name">Description</div>
        <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus alias animi consequatur
            delectus, dicta dolore explicabo hic id incidunt inventore ipsum libero officia recusandae rem,
            similique soluta temporibus voluptatem.
        </div>
        <div className="card-name">Attachments</div>

        <div className="event-service-attachment">
            <img src="https://media.wired.com/photos/5c1ae77ae91b067f6d57dec0/master/pass/Comparison-City-MAIN-ART.jpg"
                 alt=""/>
        </div>
    </div>
);

export default EventDescription;

