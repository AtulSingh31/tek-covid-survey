import { createStore, combineReducers } from "redux"; // initializes redux form reducer
import {postSurvey} from './reducers/survey'
const rootReducer = combineReducers({
  survey:postSurvey
});

export default createStore(rootReducer);