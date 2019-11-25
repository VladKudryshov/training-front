import React, {Component} from 'react';
import DietDay from "../components/diet/dietDay/DietDay";
import ModalContainer from "./ModalContainer";
import WaterModalContent from "../components/modals/WaterModalContent";

import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import {saveStat} from "../redux+saga/actions/dietStatActions";
import DishesModalContainer from "./DishesModalContainer";


class DietDayContainer extends Component {

    state = {
        visible: false,
        eating: {
            modalTitle: 'Новый прием пищи',
            modalContent: <DishesModalContainer/>,
        },
        water:{
            modalTitle: 'Новый прием воды',
            modalContent: <WaterModalContent/>,
        },
        info:{
            modalTitle: 'Информация о приеме',
            modalContent: <DishesModalContainer/>,
        } ,
        content: {
            modalTitle: '',
            modalContent: <></>,
        }
    };

    openTimeInfo = (type) => {
        const {visible} = this.state;
        this.setState({visible: !visible})
        this.setState({content: this.state[type]})

    };

    render() {

        return (
            <>
                <DietDay openModal={this.openTimeInfo} dietDay={this.props.dietDay} />
                <ModalContainer isOpen={this.state.visible} close={this.openTimeInfo} content={this.state.content}/>
            </>
        );
    }
}


const mapStateToProps = (state) => {
    const dietDay = state.dietDay;
    return ({
        dietDay
    });
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        saveStat

    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DietDayContainer);
