import React, {Component} from 'react';
import DishesModalContent from "../components/modals/DishesModalContent";
import connect from "react-redux/es/connect/connect";


class DishesModalContainer extends Component {

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
            <DishesModalContent isCatalog={this.state.visible} open={this.hide} dishes = {this.props.dishes}/>
        );
    }
}



const mapStateToProps = (state) => {
    const dishes = state.dishesCatalog;
    return ({
        dishes
    });
};


export default connect(mapStateToProps, null)(DishesModalContainer);


