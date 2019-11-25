import React, {Component} from 'react';
import CurrentDietPlan from "../components/diet/CurrentDietPlan";


class DietWeeksContainer extends Component {

    render() {


        return (
            <CurrentDietPlan planId={this.props.planId}/>

        );
    }
}


export default DietWeeksContainer;