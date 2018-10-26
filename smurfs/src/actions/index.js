/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';


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

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const getSmurfs = () => {
  return function(dispatch) {
      dispatch({ type: FETCHING });
      axios
          .get('http://localhost:333/smurfs/')
          .then(response => {
              dispatch({ type: SUCCESS, payload: response.data });
          })
          .catch(error => {
              dispatch({ type: FAILURE, payload: error })
          });
  }
}

export const ADDING = 'ADDING';
export const ADDED = 'ADDED';
export const FAILED_ADD = 'FAILED_ADD';

export const addSmurf = newSmurf => {
    return function(dispatch) {
        dispatch({ type: ADDING });
        axios
            .post('http://localhost:333/smurfs/', newSmurf)
            .then(response => {
                dispatch({ type: ADDED, payload: response.data })
            })
            .catch(error => {
                dispatch({ type: FAILED_ADD, payload: error })
            });
    }
}