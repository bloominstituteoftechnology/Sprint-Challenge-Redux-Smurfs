/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';
export const FETCH_SMURFS = 'FETCH_SMURFS';
export const ADD_SMURF = 'ADD_SMURF';

export const fetchSmurfs = () => {
  const getSmurfs = axios.get(`http://localhost:3333/smurfs`);
  return function (dispatch) {
  getSmurfs.then(someData => {
    dispatch({ type: FETCH_SMURFS, payload: someData.data });
})
  .catch(err => {
    console.log(err);
  })
  }
};

export const addSmurf = smurf => {
    const newFriend = axios.post(`http://localhost:3333/smurfs`, smurf);
    return dispatch => {
      dispatch({ type: ADD_SMUFF });
      newFriend
        .then(({ data }) => {
          dispatch({ type: ADD_SMURF, payload: data });
        })
        .catch(err => {
          console.log(err);
        })
    }
  };

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
