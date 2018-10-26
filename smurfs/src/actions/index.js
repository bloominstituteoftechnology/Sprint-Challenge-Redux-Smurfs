/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
export const ERROR = 'ERROR';
export const ADDING_SMURF = 'ADDING_SMURF';
export const DELETING_SMURF = 'DELETING_SMURF';
export const UPDATING_SMURF = 'UPDATING_SMURF';

const URL = 'http://localhost:3333/smurfs';

export const getSmurfs = () => {
	const promise = axios.get(`${URL}`);
	return (dispatch) => {
		dispatch({ type: FETCHING_SMURFS });
		promise
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

export const deleteSmurf = (id) => {
	const promise = axios.delete(`${URL}/${id}`);
	return (dispatch) => {
		promise
			.then(({ data }) => {
				dispatch({ type: DELETING_SMURF, payload: data });
			})
			.catch((err) => {
				dispatch({ type: ERROR, payload: err });
			});
	};
};

export const updateSmurf = (smurf) => {
	const promise = axios.put(`${URL}/${smurf}`, smurf);
	return (dispatch) => {
		promise
			.then(({ data }) => {
				dispatch({ type: UPDATING_SMURF, payload: data });
			})
			.catch((err) => {
				dispatch({ type: ERROR, payload: err });
			});
	};
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
