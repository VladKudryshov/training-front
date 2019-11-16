import React from 'react';
import DishInfo from "./DishInfo";

const Dish = ({info, stat}) => (
    <li className="dish">
        <div className="dish-header">
            <div className="info">
                <span className="name">{info.name}</span>
                <span className="name">{info.isDish
                    ? <i className="fas fa-concierge-bell"/>
                    : <i className="fas fa-drumstick-bite"/>}</span>
                <span className="name">{info.isFavorite && <i className="fas fa-heart" style={{color: "red"}}/>}</span>
            </div>
            <span className="name"><i className="fas fa-ellipsis-v"/></span>
        </div>

        <DishInfo stat={stat}/>
    </li>
)
export default Dish;

