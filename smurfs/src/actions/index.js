/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer DONE
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf DONE
   R - getSmurfs DONE
   U - updateSmurf NO SMURF IS WORTH IMPROVING
   D - deleteSmurf DONE
*/

import axios from "axios";

//Fetch Smurfs
export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";

//Add Smurf
export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

//Delete Smurf
export const DELETE_SMURF_START = "DELETE_SMURF_START";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";

const URL = "http://localhost:3333/smurfs";

export const getSmurfs = () => dispatch => {
	dispatch({ type: FETCH_SMURFS_START });
	axios
		.get(`${URL}`)
		.then(response => {
			console.log("Fetch succeeded", response);
			dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data });
		})
		.catch(err => {
			console.log("Fetch failed", err);
			dispatch({ type: FETCH_SMURFS_FAILURE, payload: err });
		});
};

export const addSmurf = smurf => dispatch => {
	dispatch({ type: ADD_SMURF_START });
	axios
		.post(`${URL}`, smurf)
		.then(response => {
			console.log("Add succeeded", response);
			dispatch({
				type: ADD_SMURF_SUCCESS,
				payload: response.data
			});
		})
		.catch(err => {
			console.log("Add Failed", err);
			dispatch({ type: ADD_SMURF_FAILURE, payload: err });
		});
};

export const deleteSmurf = id => dispatch => {
	dispatch({ type: DELETE_SMURF_START });
	axios
		.delete(`${URL}/${id}`)
		.then(response => {
			console.log("Deleted succeeded", response);
			dispatch({
				type: DELETE_SMURF_SUCCESS,
				payload: response.data
			});
		})
		.catch(err => {
			console.log("Delete failed", err);
			dispatch({ type: DELETE_SMURF_FAILURE, payload: err });
		});
};
