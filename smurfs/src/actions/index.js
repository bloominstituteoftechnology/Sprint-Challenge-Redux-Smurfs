/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from 'axios';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ADD_SMURF = 'ADD_SMURF';
export const ADDED_SMURF = 'ADDED_SMURF';
export const ERROR = 'ERROR';

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
  dispatch({ type: FETCHING });

  axios
    .get(`http://localhost:3333/smurfs`)
    .then(response => {
      console.log("here is the response" + response.data);
      dispatch({ type: FETCHED, smurfs: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: 'Error fetching the Smurfs =(' });
    });
};

export const addSmurf = (smurf) => (dispatch) => {
  dispatch({ type: ADD_SMURF });
  axios
    .post(`http://localhost:3333/smurfs`, smurf)
    .then((response)=> {
      dispatch({ type: ADDED_SMURF, smurfs: response.data});
    })
    .catch((err) => {
			dispatch({ type: ERROR, errorMessage: "You didnt add any Smurfies" });
		});

}