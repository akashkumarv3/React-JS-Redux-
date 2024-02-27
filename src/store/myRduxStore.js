import { createStore, applyMiddleware} from "redux";
import logger from 'redux-logger'
import rootReducer from '../reducers/rootReducer'
import {thunk} from 'redux-thunk'
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/rootSaga";

const sagaMiddleware=createSagaMiddleware();

const mystore=createStore(rootReducer,applyMiddleware(logger,thunk,sagaMiddleware));
//sagadillware should run always after redux store it is done 
//Or Simple worrd mystore creation k bad run metthid call krna hai sagamidleware ka 
sagaMiddleware.run(rootSaga);

export default mystore;