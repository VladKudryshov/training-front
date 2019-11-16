import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../redux+saga/reducers';

import appSaga from '../redux+saga/sagas/sagas';
import {composeWithDevTools} from "redux-devtools-extension";
// import {handleApiError, handleShowNotification} from "./middlewires/middlewares";

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(rootReducer, composeWithDevTools(
        applyMiddleware(... [
            sagaMiddleware]),
        // other store enhancers if any
    ));

    sagaMiddleware.run(appSaga);

    return store;
};

export default configureStore;
