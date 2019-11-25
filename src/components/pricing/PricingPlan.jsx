import React from 'react';
import './index.css'

const PricingPlan = ({plan}) => (
    <div className="price-plan">
        <div className="header">
            <div className="plan-tag">NEW</div>
            <div className="plan-name"><h2>{plan.name}</h2></div>
            <div className="plan-price"><span className="money">$ {plan.price}</span> /месяц</div>
        </div>
        <ul className="content">
            {plan.properties.map(propertyName => <li>{propertyName}</li>)}
        </ul>
        <div className="action">
            <button className="btn subscribe action-c">Оформить подписку</button>
        </div>
    </div>
)
export default PricingPlan;

