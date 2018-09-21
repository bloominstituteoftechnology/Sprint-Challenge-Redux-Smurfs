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

import axios from 'axios';

// getSmurfs
export const GETTING_SMURFS = 'GETTING_SMURFS';
export const GOT_SMURFS = 'GOT_SMURFS';
export const GET_SMURFS_ERROR = 'GET_SMURFS_ERROR';
//addSmurf
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADDED_SMURF = 'ADDED_SMURF';
export const ADD_SMURF_ERROR = 'ADD_SMURF_ERROR';
// deleteSmurf
export const DELETING_SMURF = 'DELETING_SMURF';
export const DELETED_SMURF = 'DELETED_SMURF';
export const DELETE_SMURF_ERROR = 'DELETE_SMURF_ERROR';
// editSmurf
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const UPDATED_SMURF = 'UPDATED_SMURF';
export const UPDATE_SMURF_ERROR = 'UPDATE_SMURF_ERROR';

export const getSmurfs = () => {
	return dispatch => {
		dispatch({ type: GETTING_SMURFS });

		axios
			.get('http://localhost:3333/smurfs')

			.then(response => {
				dispatch({ type: GOT_SMURFS, payload: response.data });
			})

			.catch(error => dispatch({ type: GET_SMURFS_ERROR, payload: error }));
	};
};

export const addSmurf = smurf => {
	return dispatch => {
		dispatch({ type: ADDING_SMURF });

		axios
			.post('http://localhost:3333/smurfs', smurf)

			.then(response => {
				dispatch({ type: ADDED_SMURF, payload: response.data });
			})

			.catch(error => dispatch({ type: ADD_SMURF_ERROR, payload: error }));
	};
};

export const deleteSmurf = id => {
	return dispatch => {
		dispatch({ type: DELETING_SMURF });

		axios
			.delete(`http://localhost:3333/smurfs/${id}`)

			.then(response => {
				console.log(response.data);
				dispatch({ type: DELETED_SMURF, payload: response.data });
			})

			.catch(error => dispatch({ type: DELETE_SMURF_ERROR, payload: error }));
	};
};

export const editSmurf = updatedSmurf => {
	return dispatch => {
		dispatch({ type: UPDATING_SMURF });

		axios
			.put(`http://localhost:3333/smurfs/${updatedSmurf.id}`, {
				updatedSmurf
			})

			.then(response => {
				console.log(response);
				dispatch({ type: UPDATED_SMURF, payload: response.data });
			})

			.catch(error => dispatch({ type: UPDATE_SMURF_ERROR, payload: error }));
	};
};
