/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from 'axios';

export const ERROR = 'ERROR';
//export const GET_SMURFS = 'GET_SMURFS';
export const GETTING_SMURFS = 'GETTING_SMURFS';
export const SMURFS_RECEIVED = 'SMURFS_RECEIVED';
export const CREATE_SMURF = 'CREATE_SMURF';
export const SMURF_CREATED = 'SMURF_CREATED';

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

//export const getSmurfs = () => {

export function getSmurfs() {
    //return dispatch => {
    return function(dispatch) {
	dispatch({ type: GETTING_SMURFS });	
	axios.get(`http://localhost:3333/smurfs`)
	    .then(response => {
		console.log(response.data);
		dispatch({ type: SMURFS_RECEIVED, payload: response.data });
	    })
	    .catch(err => {
		console.log('error in getSmurfs action');
		dispatch({ type: ERROR, payload: err });
	    });
    };
};

export function addSmurf(smurf) {
    //const newSmurf = axios.post(`http://localhost:3333/smurfs`, smurf);
    return function(dispatch) {
	dispatch({ type: CREATE_SMURF });
	axios.post(`http://localhost:3333/smurfs`, smurf)
	    .then(response => {
		dispatch({type: SMURF_CREATED, payload: response.data});
	    })
	    .catch(err => {
		console.log('error in addSmurf action');
		dispatch({type: ERROR, payload: err});
	    });
    };
};
