/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const GETTING = 'GETTING';
export const GETTING_SUCCESS = 'GETTING_SUCCESS';
export const GETTING_ERROR = 'GETTING_ERROR';
export const PUTTING = 'PUTTING';
export const PUTTING_ERROR = 'PUTTING_ERROR';


/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  console.log('getSmurfs called');
  dispatch({ type: GETTING });
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      console.log(response);
      dispatch({ type: GETTING_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: GETTING_ERROR, payload: error })
    });
}

export const postSmurf = (newSmurf) => dispatch => {
  console.log('Post Smurfs called');
  dispatch({ type: PUTTING });
  axios
    .get('http://localhost:3333/smurfs', newSmurf)
    .then(response => {
      console.log('Qapla\'!');
      this.getSmurfs();
    })
    .catch(error => {
      dispatch({ type: PUTTING_ERROR, payload: error })
    });
}
