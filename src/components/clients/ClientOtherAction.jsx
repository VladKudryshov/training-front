import React from 'react';
import './index.css'
import SimpleProfile from "../profile/SimpleProfile";

const ClientOtherAction = ({isVisible}) => (
    <>
        {
            isVisible && <ul className="client-actions">
                <li>Удалить</li>
                <li>Заблокировать</li>
            </ul>
        }
    </>
)
export default ClientOtherAction;

