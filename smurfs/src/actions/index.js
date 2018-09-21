/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios";

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCHED_SMURFS = "FETCHED_SMURFS";
export const SMURF_FETCHING_ERROR = "SMURF_FETCHING_ERROR";
export const ADDING_SMURF = "ADDING_SMURF";
export const ADDED_SMURF = "ADDED_SMURF";
export const ADDING_SMURF_ERROR = "ADDING_SMURF_ERROR";

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
	dispatch({ type: FETCHING_SMURFS });
	const promise = axios.get("http://localhost:3333/smurfs");

	promise
		.then(response => {
			dispatch({ type: FETCHED_SMURFS, payload: response.data });
		})
		.catch(err => {
			dispatch({ type: SMURF_FETCHING_ERROR, payload: err });
		});
};

export const addSmurf = smurf => dispatch => {
	dispatch({ type: ADDING_SMURF });

	axios
		.post("http://localhost:3333/smurfs", smurf)
		.then(response => {
			dispatch({ type: ADDED_SMURF, payload: response.data });
		})
		.catch(err => {
			dispatch({ type: ADDING_SMURF_ERROR, payload: err });
		});
};
