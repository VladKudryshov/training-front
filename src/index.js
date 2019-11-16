import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {browserHistory, Route, Router} from "react-router";
import Root from "./components/root/Root";
import Content from "./components/content/Content";
import configureStore from "./config/configureStore";
import UserContainerRoot from "./components/root/UserContainerRoot";
import ChatRoom from "./components/chat-room/ChatRoom";
import Calendar from "./components/calendar/Calendar";
import TrainingWeek from "./components/training/TrainingWeek";
import TrainingPlan from "./components/training/TrainingPlan";
import Training from "./components/training/Training";
import IndexRoute from "react-router/es/IndexRoute";
import DietWeek from "./components/diet/DietWeek";
import DietDayContainer from "./containers/DietDayContainer";
import Profile from "./components/profile/Profile";
import TrainingContainer from "./containers/TrainingContainer";
import DietContainer from "./containers/DietContainer";
import CurrentDietPlan from "./components/diet/CurrentDietPlan";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Root}>
                <Route component={UserContainerRoot}>
                    <IndexRoute component={Content}/>
                    <Route path="chat" component={ChatRoom}/>
                    <Route path="calendar" component={Calendar}/>
                    <Route path="profile" component={Profile}/>

                    <Route path="training" component={TrainingContainer}/>
                    <Route path="training/:id" component={TrainingPlan}/>
                    <Route path="training/:trainingid/week/:weekid" component={TrainingWeek}/>
                    <Route path="training/:trainingid/week/:weekid/:id" component={Training}/>

                    <Router path="diet">
                        <IndexRoute component={DietContainer}/>
                        <Router path=":id" >
                            <IndexRoute component={CurrentDietPlan}/>
                            <Router path=":weekid" >
                                <IndexRoute component={DietWeek}/>
                                <Route path=":day" component={DietDayContainer}/>
                            </Router>
                        </Router>
                    </Router>

                </Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);



