import React from 'react';
import DietInfo from "../diet/DietInfo";

const DishesInfoModalContent = () => (
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
            </div>
            <ul className="dishes">
                <li className="dish">
                    <span className="name">Название</span>
                    <span className="name"><i className="fas fa-ellipsis-v"/></span>
                    <div className="diet-info">
                        <div>
                            <label htmlFor="squirrels">
                                <div className="dish-progress-bar">
                                    <span className="dish-current-progress">155</span>
                                    <div id="squirrels" className="type">Белков</div>
                                    <div className="progress" style={{width: 66.8 + '%'}}/>
                                    <span className="dish-finish-progress right">232</span>
                                </div>

                            </label>

                        </div>
                        <div>
                            <label htmlFor="squirrels">
                                <div className="dish-progress-bar">
                                    <span className="dish-current-progress">155</span>
                                    <div id="squirrels" className="type">Жиров</div>
                                    <div className="progress" style={{width: 66.8 + '%'}}/>
                                    <span className="dish-finish-progress right">232</span>
                                </div>

                            </label>

                        </div>
                        <div>
                            <label htmlFor="squirrels">
                                <div className="dish-progress-bar">
                                    <span className="dish-current-progress">155</span>
                                    <div id="squirrels" className="type">Углеводов</div>
                                    <div className="progress" style={{width: 66.8 + '%'}}/>
                                    <span className="dish-finish-progress right">232</span>
                                </div>

                            </label>

                        </div>
                        <div className="calories">
                            <label htmlFor="calories">

                                <div className="dish-progress-bar">
                                    <span className="dish-current-progress">155</span>
                                    <div id="squirrels" className="type">Калорий</div>
                                    <div className="progress" style={{width: 66.8 + '%'}}/>
                                    <span className="dish-finish-progress right">232</span>
                                </div>
                            </label>
                        </div>
                    </div>
                </li>
                <li className="dish">
                    <span className="name">Название</span>
                    <span className="name"><i className="fas fa-ellipsis-v"/></span>
                    <div className="diet-info">
                        <div>
                            <label htmlFor="squirrels">
                                <div className="dish-progress-bar">
                                    <span className="dish-current-progress">155</span>
                                    <div id="squirrels" className="type">Белков</div>
                                    <div className="progress" style={{width: 66.8 + '%'}}/>
                                    <span className="dish-finish-progress right">232</span>
                                </div>

                            </label>

                        </div>
                        <div>
                            <label htmlFor="squirrels">
                                <div className="dish-progress-bar">
                                    <span className="dish-current-progress">155</span>
                                    <div id="squirrels" className="type">Жиров</div>
                                    <div className="progress" style={{width: 66.8 + '%'}}/>
                                    <span className="dish-finish-progress right">232</span>
                                </div>

                            </label>

                        </div>
                        <div>
                            <label htmlFor="squirrels">
                                <div className="dish-progress-bar">
                                    <span className="dish-current-progress">155</span>
                                    <div id="squirrels" className="type">Углеводов</div>
                                    <div className="progress" style={{width: 66.8 + '%'}}/>
                                    <span className="dish-finish-progress right">232</span>
                                </div>

                            </label>

                        </div>
                        <div className="calories">
                            <label htmlFor="calories">

                                <div className="dish-progress-bar">
                                    <span className="dish-current-progress">155</span>
                                    <div id="squirrels" className="type">Калорий</div>
                                    <div className="progress" style={{width: 66.8 + '%'}}/>
                                    <span className="dish-finish-progress right">232</span>
                                </div>
                            </label>
                        </div>
                    </div>
                </li>
                <li className="dish">
                    <span className="name">Название</span>
                    <span className="name"><i className="fas fa-ellipsis-v"/></span>
                    <div className="diet-info">
                        <div>
                            <label htmlFor="squirrels">
                                <div className="dish-progress-bar">
                                    <span className="dish-current-progress">155</span>
                                    <div id="squirrels" className="type">Белков</div>
                                    <div className="progress" style={{width: 66.8 + '%'}}/>
                                    <span className="dish-finish-progress right">232</span>
                                </div>

                            </label>

                        </div>
                        <div>
                            <label htmlFor="squirrels">
                                <div className="dish-progress-bar">
                                    <span className="dish-current-progress">155</span>
                                    <div id="squirrels" className="type">Жиров</div>
                                    <div className="progress" style={{width: 66.8 + '%'}}/>
                                    <span className="dish-finish-progress right">232</span>
                                </div>

                            </label>

                        </div>
                        <div>
                            <label htmlFor="squirrels">
                                <div className="dish-progress-bar">
                                    <span className="dish-current-progress">155</span>
                                    <div id="squirrels" className="type">Углеводов</div>
                                    <div className="progress" style={{width: 66.8 + '%'}}/>
                                    <span className="dish-finish-progress right">232</span>
                                </div>

                            </label>

                        </div>
                        <div className="calories">
                            <label htmlFor="calories">

                                <div className="dish-progress-bar">
                                    <span className="dish-current-progress">155</span>
                                    <div id="squirrels" className="type">Калорий</div>
                                    <div className="progress" style={{width: 66.8 + '%'}}/>
                                    <span className="dish-finish-progress right">232</span>
                                </div>
                            </label>
                        </div>
                    </div>
                </li>
                <li className="dish">
                    <span className="name">Название</span>
                    <span className="name"><i className="fas fa-ellipsis-v"/></span>
                    <div className="diet-info">
                        <div>
                            <label htmlFor="squirrels">
                                <div className="dish-progress-bar">
                                    <span className="dish-current-progress">155</span>
                                    <div id="squirrels" className="type">Белков</div>
                                    <div className="progress" style={{width: 66.8 + '%'}}/>
                                    <span className="dish-finish-progress right">232</span>
                                </div>

                            </label>

                        </div>
                        <div>
                            <label htmlFor="squirrels">
                                <div className="dish-progress-bar">
                                    <span className="dish-current-progress">155</span>
                                    <div id="squirrels" className="type">Жиров</div>
                                    <div className="progress" style={{width: 66.8 + '%'}}/>
                                    <span className="dish-finish-progress right">232</span>
                                </div>

                            </label>

                        </div>
                        <div>
                            <label htmlFor="squirrels">
                                <div className="dish-progress-bar">
                                    <span className="dish-current-progress">155</span>
                                    <div id="squirrels" className="type">Углеводов</div>
                                    <div className="progress" style={{width: 66.8 + '%'}}/>
                                    <span className="dish-finish-progress right">232</span>
                                </div>

                            </label>

                        </div>
                        <div className="calories">
                            <label htmlFor="calories">

                                <div className="dish-progress-bar">
                                    <span className="dish-current-progress">155</span>
                                    <div id="squirrels" className="type">Калорий</div>
                                    <div className="progress" style={{width: 66.8 + '%'}}/>
                                    <span className="dish-finish-progress right">232</span>
                                </div>
                            </label>
                        </div>
                    </div>
                </li>
                <li className="dish">
                    <span className="name">Название</span>
                    <span className="name"><i className="fas fa-ellipsis-v"/></span>
                    <div className="diet-info">
                        <div>
                            <label htmlFor="squirrels">
                                <div className="dish-progress-bar">
                                    <span className="dish-current-progress">155</span>
                                    <div id="squirrels" className="type">Белков</div>
                                    <div className="progress" style={{width: 66.8 + '%'}}/>
                                    <span className="dish-finish-progress right">232</span>
                                </div>

                            </label>

                        </div>
                        <div>
                            <label htmlFor="squirrels">
                                <div className="dish-progress-bar">
                                    <span className="dish-current-progress">155</span>
                                    <div id="squirrels" className="type">Жиров</div>
                                    <div className="progress" style={{width: 66.8 + '%'}}/>
                                    <span className="dish-finish-progress right">232</span>
                                </div>

                            </label>

                        </div>
                        <div>
                            <label htmlFor="squirrels">
                                <div className="dish-progress-bar">
                                    <span className="dish-current-progress">155</span>
                                    <div id="squirrels" className="type">Углеводов</div>
                                    <div className="progress" style={{width: 66.8 + '%'}}/>
                                    <span className="dish-finish-progress right">232</span>
                                </div>

                            </label>

                        </div>
                        <div className="calories">
                            <label htmlFor="calories">

                                <div className="dish-progress-bar">
                                    <span className="dish-current-progress">155</span>
                                    <div id="squirrels" className="type">Калорий</div>
                                    <div className="progress" style={{width: 66.8 + '%'}}/>
                                    <span className="dish-finish-progress right">232</span>
                                </div>
                            </label>
                        </div>
                    </div>
                </li>
                <li className="dish">
                    <span className="name">Название</span>
                    <span className="name"><i className="fas fa-ellipsis-v"/></span>
                    <div className="diet-info">
                        <div>
                            <label htmlFor="squirrels">
                                <div className="dish-progress-bar">
                                    <span className="dish-current-progress">155</span>
                                    <div id="squirrels" className="type">Белков</div>
                                    <div className="progress" style={{width: 66.8 + '%'}}/>
                                    <span className="dish-finish-progress right">232</span>
                                </div>

                            </label>

                        </div>
                        <div>
                            <label htmlFor="squirrels">
                                <div className="dish-progress-bar">
                                    <span className="dish-current-progress">155</span>
                                    <div id="squirrels" className="type">Жиров</div>
                                    <div className="progress" style={{width: 66.8 + '%'}}/>
                                    <span className="dish-finish-progress right">232</span>
                                </div>

                            </label>

                        </div>
                        <div>
                            <label htmlFor="squirrels">
                                <div className="dish-progress-bar">
                                    <span className="dish-current-progress">155</span>
                                    <div id="squirrels" className="type">Углеводов</div>
                                    <div className="progress" style={{width: 66.8 + '%'}}/>
                                    <span className="dish-finish-progress right">232</span>
                                </div>

                            </label>

                        </div>
                        <div className="calories">
                            <label htmlFor="calories">

                                <div className="dish-progress-bar">
                                    <span className="dish-current-progress">155</span>
                                    <div id="squirrels" className="type">Калорий</div>
                                    <div className="progress" style={{width: 66.8 + '%'}}/>
                                    <span className="dish-finish-progress right">232</span>
                                </div>
                            </label>
                        </div>
                    </div>
                </li>
                <li className="dish">
                    <span className="name">Название</span>
                    <span className="name"><i className="fas fa-ellipsis-v"/></span>
                    <div className="diet-info">
                        <div>
                            <label htmlFor="squirrels">
                                <div className="dish-progress-bar">
                                    <span className="dish-current-progress">155</span>
                                    <div id="squirrels" className="type">Белков</div>
                                    <div className="progress" style={{width: 66.8 + '%'}}/>
                                    <span className="dish-finish-progress right">232</span>
                                </div>

                            </label>

                        </div>
                        <div>
                            <label htmlFor="squirrels">
                                <div className="dish-progress-bar">
                                    <span className="dish-current-progress">155</span>
                                    <div id="squirrels" className="type">Жиров</div>
                                    <div className="progress" style={{width: 66.8 + '%'}}/>
                                    <span className="dish-finish-progress right">232</span>
                                </div>

                            </label>

                        </div>
                        <div>
                            <label htmlFor="squirrels">
                                <div className="dish-progress-bar">
                                    <span className="dish-current-progress">155</span>
                                    <div id="squirrels" className="type">Углеводов</div>
                                    <div className="progress" style={{width: 66.8 + '%'}}/>
                                    <span className="dish-finish-progress right">232</span>
                                </div>

                            </label>

                        </div>
                        <div className="calories">
                            <label htmlFor="calories">

                                <div className="dish-progress-bar">
                                    <span className="dish-current-progress">155</span>
                                    <div id="squirrels" className="type">Калорий</div>
                                    <div className="progress" style={{width: 66.8 + '%'}}/>
                                    <span className="dish-finish-progress right">232</span>
                                </div>
                            </label>
                        </div>
                    </div>
                </li>

            </ul>
        </div>

    </div>
)
export default DishesInfoModalContent;

