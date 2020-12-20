import * as ActionTypes from './ActionTypes';

export const postSurvey = (state = { errMess: null}, action) => {
    switch (action.type) {
      case ActionTypes.ADD_SURVEY:
        var result=action.payload;
        return {...state, errMess: null};
  
      default:
        return state;
    }
  };