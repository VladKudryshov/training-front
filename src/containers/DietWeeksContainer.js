import React, {Component} from 'react';
import DietChild from "../components/diet/DietChild";
import DietWeekTrainingCard from "../components/diet/cards/DietWeekTrainingCard";
import CurrentDietPlan from "../components/diet/CurrentDietPlan";


class DietWeeksContainer extends Component {

    render() {
        console.log(this.props);


        return (
            <CurrentDietPlan planId={this.props.planId}/>

        );
    }
}


export default DietWeeksContainer;