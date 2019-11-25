import React from 'react';
import './index.css'
import SimpleProfile from "../profile/SimpleProfile";

const TrainerOtherAction = ({isVisible}) => (
    <>
        {
            isVisible && <ul className="trainer-actions">
                <li>Удалить</li>
                <li>Заблокировать</li>
            </ul>
        }
    </>
)
export default TrainerOtherAction;

