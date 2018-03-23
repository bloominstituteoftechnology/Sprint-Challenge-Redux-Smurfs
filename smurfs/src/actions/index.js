/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";

export const ADDED_SMURF = "ADDED_SMURF";
export const ADDING_SMURF = "ADDING_SMURF";

export const DELETING_SMURF = "DELETING_SMURF";
export const DELETED_SMURF = "DELETED_SMURF";

let nextId = 0;

export const getSmurfs = () => (dispatch) => {
	dispatch({ type: FETCHING });
	axios
		.get(`http://localhost:3333/smurfs`)
		.then((response) => {
			dispatch({ type: FETCHED, smurfs: response.data });
		})
		.catch((err) => {
			dispatch({ type: ERROR, message: "GET SMURF FAILED" });
		});
};

export const addSmurf = (smurf) => (dispatch) => {
	dispatch({ type: ADDING_SMURF });
	axios
		.post(`http://localhost:3333/smurfs`, smurf)
		.then((response) => {
			dispatch({ type: ADDED_SMURF, name: response.data, age: response.data, height: response.data, id: ++nextId });
		})
		.catch((err) => {
			dispatch({ type: ERROR, message: "FAILED TO ADD SMURF " });
		});
};

export const deleteSmurf = (id) => (dispatch) => {
	dispatch({ type: DELETING_SMURF });
	axios
		.delete(`http://localhost:3333/smurfs/:${id}`, id)
		.then((response) => {
			dispatch({ type: DELETED_SMURF, smurfs: response.data });
		})
		.catch((err) => {
			dispatch({ type: ERROR, message: "FAILED TO DELETE SMURF" });
		});
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
