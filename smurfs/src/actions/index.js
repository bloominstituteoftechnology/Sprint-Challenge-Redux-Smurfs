/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios'
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

export const FETCHING_SMURF = 'FETCHING_SMURF';
export const ADDING_SMURF = 'ADDING_SMURF'
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const CREATE_SMURF = 'CREATE_SMURF';
export const DELETING_SMURF = 'DELETING_SMURF';
export const ERROR = 'ERROR';

const fetchSmurf = () => {
  const promise = axios.get('http://localhost:3333/smurfs');
  return function (dispatch) {
    dispatch({ type: FETCHING_SMURF });

    promise.then((response) => {
      console.log(response.data)
      dispatch({ type: ADDING_SMURF, payload: response.data })
    })
      .catch(err => {
        dispatch({ type: ERROR, payload: 'Error fetching smurf' })
      });
  };

};

const createSmurf = smurf => {
  const promise = axios.post('http://localhost:3333/smurfs/create', smurf);

  return dispatch => {
    dispatch({ type: UPDATING_SMURF });
    promise.then((response) => {
      dispatch({ type: CREATE_SMURF, payload: response })
    })
      .catch(err => {
        dispatch({ type: ERROR, payload: err })
      })
  }
}

export default { createSmurf, fetchSmurf }