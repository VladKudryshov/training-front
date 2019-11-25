import React from 'react';
import './index.css'
import SimpleProfile from "../profile/SimpleProfile";
import ClientOtherAction from "./ClientOtherAction";
import Tooltip from "../utils/Tooltip";

const Client = ({showActions, visible}) => (
    <div className="card">
        <SimpleProfile/>
        <div className="actions">
            <ClientOtherAction isVisible={visible}/>
            <Tooltip tooltipMessage={"27.04.1997"}>
                <i className="fas fa-gift hover"/>
            </Tooltip>
            <i className="fas fa-ellipsis-v hover" onClick={showActions}/>
        </div>
        <div className="client-info">Является клиентом уже 25 дней</div>
    </div>
)
export default Client;

