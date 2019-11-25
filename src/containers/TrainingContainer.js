import React, {Component} from 'react';
import TrainingChild from "../components/training/TrainingChild";


class TrainingContainer extends Component {

    state = {
        visible: false
    };

    hide = () => {
        const {visible} = this.state;
        this.setState({visible: !visible})
    };

    render() {

        return (
            <TrainingChild isPlans={this.state.visible} hide={this.hide}/>
        );
    }
}


export default TrainingContainer;