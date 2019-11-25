import React from 'react';
import DietInfo from "../diet/dietDay/DietInfo";
import Dish from "../diet/dish/Dish";
import CatalogDishesContainer from "../../containers/CatalogDishesContainer";

const DishesModalContent = ({isCatalog, open, dishes}) => (
    <div>
        <div className="modal-dishes-info">
            <div className="overlay">
                <div className="dishes-header">
                    <h2>Завтрак</h2>
                    <h3><i className="far fa-clock"/> 20:20</h3>
                </div>
                <div className="statistics">
                    <DietInfo stat={{
                        finish: {
                            squirrels: 232,
                            fats: 60,
                            carbohydrates: 300,
                            calories: 3000,
                            water: 4000
                        },
                        current: {
                            squirrels: 242,
                            fats: 10,
                            carbohydrates: 300,
                            calories: 3100,
                            water: 3000
                        }
                    }}/>
                </div>
                <div className="diet-actions">
                    <i className="fas fa-drumstick-bite add-eating simple-hover " onClick={()=>open()}/>
                </div>
            </div>
            <ul className="dishes">
                {isCatalog
                    ? <CatalogDishesContainer/>
                    : dishes.current.map(dish=> <Dish stat={dish.stat} info={dish.info}/>)
                }
            </ul>
        </div>

    </div>
)
export default DishesModalContent;

