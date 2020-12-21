import { createStore, combineReducers, applyMiddleware } from "redux"; // initializes redux form reducer
import {postSurvey} from './reducers/survey'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
  form: formReducer,
  survey:postSurvey
})


export default createStore(rootReducer,applyMiddleware(thunk, logger));