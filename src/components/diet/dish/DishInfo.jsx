import React from 'react';
import * as dietUtils from "../utils/dietUtils";

const DishInfo = ({stat}) => (
    <div className="diet-info">
        <div>
            <label htmlFor="squirrels">
                <div className="dish-progress-bar">
                    <span className="dish-current-progress">{stat.current.squirrels}</span>
                    <div id="squirrels" className="type">Белков</div>
                    <div className="progress" style={{width: dietUtils.getPercentDone(stat.finish.squirrels, stat.current.squirrels) + '%'}}/>
                    <span className="dish-finish-progress right">{stat.finish.squirrels}</span>
                </div>

            </label>

        </div>
        <div>
            <label htmlFor="squirrels">
                <div className="dish-progress-bar">
                    <span className="dish-current-progress">{stat.current.fats}</span>
                    <div id="squirrels" className="type">Жиров</div>
                    <div className="progress" style={{width: dietUtils.getPercentDone(stat.finish.fats, stat.current.fats) + '%'}}/>
                    <span className="dish-finish-progress right">232</span>
                </div>

            </label>

        </div>
        <div>
            <label htmlFor="squirrels">
                <div className="dish-progress-bar">
                    <span className="dish-current-progress">{stat.current.carbohydrates}</span>
                    <div id="squirrels" className="type">Углеводов</div>
                    <div className="progress" style={{width: dietUtils.getPercentDone(stat.finish.carbohydrates, stat.current.carbohydrates) + '%'}}/>
                    <span className="dish-finish-progress right">232</span>
                </div>

            </label>

        </div>
        <div className="calories">
            <label htmlFor="squirrels">

                <div className="dish-progress-bar">
                    <span className="dish-current-progress">{stat.current.calories}</span>
                    <div id="squirrels" className="type">Калорий</div>
                    <div className="progress" style={{width: '100%'}}/>
                    <span className="dish-finish-progress right">{stat.finish.calories}</span>
                </div>
            </label>
        </div>
    </div>
)
export default DishInfo;

