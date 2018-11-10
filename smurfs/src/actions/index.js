import axios from 'axios';
import thunk from 'redux-thunk';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';

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

//GET
export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        console.log(response);
        dispatch({
          type: SUCCESS,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: FAIL,
          payload: 'Failed to load data'
        });
      });
  };
};

//POST
export const addSmurf = newSmurf => {
  console.log('addSmurf executed');
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(response => {
        console.log(response);
        dispatch({
          type: SUCCESS,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: FAIL,
          payload: 'Failed to load data'
        });
      });
  };
};
