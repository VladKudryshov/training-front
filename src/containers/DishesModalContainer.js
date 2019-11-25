import React, {Component} from 'react';
import DishesModalContent from "../components/modals/DishesModalContent";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import {addDishToList, saveStat} from "../redux+saga/actions/dietStatActions";


class DishesModalContainer extends Component {

    state = {
        visible: false
    };

    hide = () => {
        const {visible} = this.state;
        this.setState({visible: !visible})
    };

    addDishToList = (dish) => {
       this.props.actions.addDishToList(dish)
    };

    render() {

        return (
            <DishesModalContent isCatalog={this.state.visible} open={this.hide} dishes = {this.props.dishes} addDishToList={this.addDishToList}/>
        );
    }
}



const mapStateToProps = (state) => {
    const dishes = state.dishes;
    return ({
        dishes
    });
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        addDishToList
    }, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(DishesModalContainer);


