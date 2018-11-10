import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
FETCHING_SMURFS, ADDING_SMURF, UPDATING_SMURF, DELETING_SMURF, ERROR, FETCHED_SMURFS
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const ADDING_SMURF = 'ADDING_SMURF';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const DELETING_SMURF = 'DELETING_SMURF';
export const ERROR = 'ERROR';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
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

const URL = 'http://localhost:3333/smurfs';

export const getSmurfs = () => {
	const smurf = axios.get(`${URL}`);
	return (dispatch) => {
		dispatch({ type: FETCHING_SMURFS });
		smurf
			.then(({ data }) => {
				dispatch({ type: FETCHED_SMURFS, payload: data });
			})
			.catch((err) => {
				dispatch({ type: ERROR, payload: err });
			});
	};
};

export const addSmurf = (smurf) => {
	const promise = axios.post(`${URL}`, smurf);
	return (dispatch) => {
		promise
			.then(({ data }) => {
				dispatch({ type: ADDING_SMURF, payload: data });
			})
			.catch((err) => {
				dispatch({ type: ERROR, payload: err });
			});
	};
};