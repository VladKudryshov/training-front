import React, {Component} from 'react';
import DietTab from "../components/diet/DietTab";


class DietContainer extends Component {

    state = {
        visible: false
    };

    hide = () => {
        const {visible} = this.state;
        this.setState({visible: !visible})
    };

    render() {

        return (
            <DietTab isPlans={this.state.visible} hide={this.hide}/>
        );
    }
}


export default DietContainer;