import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import CalendarPlanner from "../components/calendar/planner/CalendarPlanner";
import ListEvents from "../components/calendar/events/ListEvents";
import EventDescription from "../components/calendar/events/EventDescription";
import Client from "../components/clients/Client";


class ClientsContainer extends Component {

    state = {
        visible: false
    };

    showActions = () => {
        const {visible} = this.state;
        this.setState({visible: !visible})
    }

    render() {

        return (
            <div className="clients gap">
               <Client showActions={()=>this.showActions()} visible={this.state.visible}/>
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


export default connect(mapStateToProps, null)(ClientsContainer);


