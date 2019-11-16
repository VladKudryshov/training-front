import React from 'react';

const DishesModalContent = () => (
    <div>
        <ul className="water-types">
            <li className="water-hover">
                <i className="fas fa-glass-whiskey" id="glass"/>
                <label className="water-type-label" htmlFor="glass">100ml</label>
            </li>
            <li className="water-hover">
                <i className="fas fa-wine-glass"/>
                <label className="water-type-label" htmlFor="glass">250ml</label>
            </li>
            <li className="water-hover">
                <i className="fas fa-wine-bottle"/>
                <label className="water-type-label" htmlFor="glass">500ml</label>
            </li>
            <li className="water-hover">
                <i className="fas fa-wine-bottle"/>
                <label className="water-type-label" htmlFor="glass">1000ml</label>
            </li>
        </ul>
    </div>
)
export default DishesModalContent;

