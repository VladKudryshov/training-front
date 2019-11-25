import React from 'react';
import './index.css'
import PricingPlan from "./PricingPlan";

const Pricing = () => (
        <div className="plans">
            <PricingPlan plan={{name: 'free', price: 0, properties: ["2 клиентов","2 тренировочных планов", "2 планов диет", "10 событий в календаре"]}}/>
            <PricingPlan plan={{name: 'basic', price: 2.32, properties: ["5 клиентов","5 тренировочных планов", "5 планов диет", "20 событий в календаре"]}}/>
            <PricingPlan plan={{name: 'standart', price: 6.36, properties: ["20 клиентов","20 тренировочных планов", "20 планов диет", "100 событий в календаре"]}}/>
            <PricingPlan plan={{name: 'premium', price: 9.99, properties: ["∞ клиентов","∞ тренировочных планов", "∞ планов диет", "∞ событий в календаре"]}}/>
        </div>
)
export default Pricing;

