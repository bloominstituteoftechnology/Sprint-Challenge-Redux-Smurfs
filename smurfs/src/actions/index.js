// Dependencies
import axios from 'axios';
/* 
	Action Types Go Here!
	Be sure to export each action type so you can pull it into your reducer
*/
export const GETTING_SMURFS = 'GETTING_SMURFS';
export const GETTING_SMURFS_COMPLETE = 'GETTING_SMURFS_COMPLETE';
export const GETTING_SMURFS_ERROR = 'GETTING_SMURFS_ERROR';

export const POSTING_SMURF = 'POSTING_SMURF';
export const POSTING_SMURF_COMPLETE = 'POSTING_SMURF_COMPLETE';
export const POSTING_SMURF_ERROR = 'POSTING_SMURF_ERROR';

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
	dispatch({ type: GETTING_SMURFS });

	axios
		.get('http://localhost:3333/smurfs')
		.then(res => dispatch({ type: GETTING_SMURFS_COMPLETE, payload: res.data }))
		.catch(err => {
			console.log(err);
			dispatch({ type: GETTING_SMURFS_ERROR, payload: err });
		})
}

export const postNewSmurf = smurf => dispatch => {
	dispatch({ type: POSTING_SMURF });

	axios
		.post('http://localhost:3333/smurfs', smurf)
		.then(res => dispatch({ type: POSTING_SMURF_COMPLETE, payload: res.data }))
		.catch(err => {
			console.log(err);
			dispatch({ type: POSTING_SMURF_ERROR, payload: err });
		})
}
