import React, {Component} from 'react';
import DietChild from "../components/diet/DietChild";


class DietContainer extends Component {

    state = {
        visible: false
    };

    hide = () => {
        const {visible} = this.state;
        this.setState({visible: !visible})
    };

    render() {
        console.log(this.state.visible);

        return (
            <DietChild isPlans={this.state.visible} hide={this.hide}/>
        );
    }
}


export default DietContainer;