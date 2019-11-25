import React from 'react';
import "../index.css"
import * as dietUtils from "../utils/dietUtils";

const DietInfo = ({stat}) => (


    <div className="diet-info">
        <div>
            <label htmlFor="squirrels">
                <div className="progress-bar">
                    <div style={{width: '100%'}}>
                        <div className="progress" >
                            <div style={{width: dietUtils.getPercentMore(stat.finish.squirrels, stat.current.squirrels) + '%'}}>
                                <div className="progress-more" />
                            </div>
                            <div style={{width: dietUtils.getPercentDone(stat.finish.squirrels, stat.current.squirrels) + '%'}}>
                               <div className="progress-done" />
                           </div>
                            <div className="st"/>
                        </div>
                    </div>
                </div>
                <span className="finish-progress right">{stat.finish.squirrels}</span>
            </label>
            <div id="squirrels">Белков</div>
        </div>
        <div>
            <label htmlFor="fats">
                <div className="progress-bar">
                    <div style={{width: '100%'}}>
                        <div className="progress" >
                            <div style={{width: dietUtils.getPercentMore(stat.finish.fats, stat.current.fats) + '%'}}>
                                <div className="progress-more" />
                            </div>
                            <div style={{width: dietUtils.getPercentDone(stat.finish.fats, stat.current.fats) + '%'}}>
                                <div className="progress-done" />
                            </div>
                            <div className="st"/>
                        </div>
                    </div>
                </div>
                <span className="finish-progress right">{stat.finish.fats}</span>
            </label>
            <div id="fats">Жиров</div>
        </div>
        <div>
            <label htmlFor="carbohydrates">
                <div className="progress-bar">
                    <div style={{width: '100%'}}>
                        <div className="progress" >
                            <div style={{width: dietUtils.getPercentMore(stat.finish.carbohydrates, stat.current.carbohydrates) + '%'}}>
                                <div className="progress-more" />
                            </div>
                            <div style={{width: dietUtils.getPercentDone(stat.finish.carbohydrates, stat.current.carbohydrates) + '%'}}>
                                <div className="progress-done" />
                            </div>
                            <div className="st"/>
                        </div>
                    </div>
                </div>
                <span className="finish-progress right">{stat.finish.carbohydrates}</span>
            </label>
            <div id="carbohydrates">Углеводов</div>
        </div>
        <div className="calories">
            <label htmlFor="calories">

                <div className="progress-bar">
                    <div style={{width: '100%'}}>
                        <div className="progress" >
                            <div style={{width: dietUtils.getPercentMore(stat.finish.calories, stat.current.calories) + '%'}}>
                                <div className="progress-more" />
                            </div>
                            <div style={{width: dietUtils.getPercentDone(stat.finish.calories, stat.current.calories) + '%'}}>
                                <div className="progress-done" />
                            </div>
                            <div className="st"/>
                        </div>
                    </div>
                </div>
                <span className="finish-progress right">{stat.finish.calories}</span>
            </label>
            <div id="calories">Калорий</div>
        </div>
        <div className="water">
            <label htmlFor="water">

                <div className="progress-bar">
                    <div style={{width: '100%'}}>
                        <div className="progress" >
                            <div style={{width: dietUtils.getPercentMore(stat.finish.water, stat.current.water) + '%'}}>
                                <div className="progress-more" />
                            </div>
                            <div style={{width: dietUtils.getPercentDone(stat.finish.water, stat.current.water) + '%'}}>
                                <div className="progress-done" style={{    background: '#2c92d6'}}/>
                            </div>
                            <div className="st"/>
                        </div>
                    </div>
                </div>
                <span className="finish-progress right">{stat.finish.water}</span>
            </label>
            <div id="calories">Воды</div>
        </div>

    </div>
)
export default DietInfo;

