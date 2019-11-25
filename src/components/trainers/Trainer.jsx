import React from 'react';
import './index.css'
import SimpleProfile from "../profile/SimpleProfile";
import TrainerOtherAction from "./TrainerOtherAction";
import Tooltip from "../utils/Tooltip";

const Trainer = ({showActions, visible}) => (
    <div className="card">
        <SimpleProfile/>
        <div className="actions">
            <TrainerOtherAction isVisible={visible}/>
            <Tooltip tooltipMessage={"231 клиент доволен"}>
                <i className="fas fa-trophy hover"/>
            </Tooltip>
            <Tooltip tooltipMessage={"Подтвержденный аккаунт"}>
                <i className="fas fa-check simple-hover default-c"/>
            </Tooltip>
        </div>
        <div className="trainer-action">
            <button className="btn default-bg">Подписка</button>
            <button className="btn action-c">Заниматься c ним</button>
        </div>
        <div className="trainer-info">Зарегистрирован в системе уже 25 дней</div>
    </div>
)
export default Trainer;

