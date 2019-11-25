import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import CalendarPlanner from "../components/calendar/planner/CalendarPlanner";
import ListEvents from "../components/calendar/events/ListEvents";
import EventDescription from "../components/calendar/events/EventDescription";


class CalendarContainer extends Component {

    state = {
        visible: false
    };

    render() {

        return (
            <div className="calendar-b gap">
                <CalendarPlanner/>
                <ListEvents events={this.props.events}/>
                <EventDescription/>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    const events = state.calendarEvents;
    return ({
        events
    });
};


export default connect(mapStateToProps, null)(CalendarContainer);


