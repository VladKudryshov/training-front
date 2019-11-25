import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {browserHistory, Route, Router} from "react-router";
import Root from "./components/root/Root";
import Content from "./components/content/Content";
import configureStore from "./config/configureStore";
import UserContainerRoot from "./components/root/UserContainerRoot";
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
import ChatContainer from "./containers/ChatContainer";
import CalendarContainer from "./containers/CalendarContainer";
import Home from "./components/home/Home";
import Registration from "./components/auth/Registration";
import Auth from "./components/auth/Auth";
import ClientsContainer from "./containers/ClientsContainer";
import TrainersContainer from "./containers/TrainersContainer";
import Pricing from "./components/pricing/Pricing";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/signin" component={Auth}/>
            <Route path="/" component={Root}>
                <Route path="/home" component={Home}/>
                <Route path="/registration" component={Registration}/>
                <Route component={UserContainerRoot}>
                    <IndexRoute component={Content}/>
                    <Route path="chat" component={ChatContainer}/>
                    <Route path="calendar" component={CalendarContainer}/>
                    <Route path="clients" component={ClientsContainer}/>
                    <Route path="trainers" component={TrainersContainer}/>
                    <Route path="profile" component={Profile}/>
                    <Route path="price" component={Pricing}/>

                    <Route path="training" component={TrainingContainer}/>
                    <Route path="training/:id" component={TrainingPlan}/>
                    <Route path="training/:trainingid/week/:weekid" component={TrainingWeek}/>
                    <Route path="training/:trainingid/week/:weekid/:id" component={Training}/>

                    <Router path="/diet">
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



