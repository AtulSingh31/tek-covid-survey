import * as ActionTypes from './ActionTypes'

export const addSurvey = (survey) => ({
    type: ActionTypes.ADD_SURVEY,
    payload: survey
});
export const postSurvey = (q1,q2,q3,q4,q5,q6,q7)=>(dispatch)=>{
    const payload={
        q1:q1,
        q2:q2,
        q3:q3,
        q4:q4,
        q5:q5,
        q6:q6,
        q7:q7
    }
    console.log("In Action creators")
    return fetch('http://localhost:8080/' + 'addSurvey', {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addSurvey(response)))
    .catch(error =>  { console.log('post Survey', error.message); alert('Your Survey could not be posted\nError: '+error.message); });
};