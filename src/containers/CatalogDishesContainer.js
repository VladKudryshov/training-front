import React, {Component} from 'react';
import DishesModalContent from "../components/modals/DishesModalContent";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import {addDishToList, saveStat} from "../redux+saga/actions/dietStatActions";
import Dish from "../components/diet/dish/Dish";


class CatalogDishesContainer extends Component {

    state = {
        visible: false
    };



    addDishToList = (dish) => {
       this.props.actions.addDishToList(dish)
    };

    render() {

        return (
          <>
              <li><input type="text" placeholder="Введите название продукта" className="search-dishes"/></li>
              {this.props.dishes.catalog.map(dish=> <Dish stat={dish.stat} info={dish.info} fromCatalog={true} addDishToList={this.addDishToList}/>)}
          </>
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
        saveStat,
        addDishToList
    }, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(CatalogDishesContainer);


