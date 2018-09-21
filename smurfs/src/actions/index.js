// Dependencies
import axios from 'axios';
/* 
	Action Types Go Here!
	Be sure to export each action type so you can pull it into your reducer
*/
export const GETTING_SMURFS = 'GETTING_SMURFS';
export const GETTING_SMURFS_COMPLETE = 'GETTING_SMURFS_COMPLETE';
export const GETTING_SMURFS_ERROR = 'GETTING_SMURFS_ERROR';

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
		.then(res => console.log('res', res))
		.catch(err => {
			console.log(err);
			dispatch({ type: GETTING_SMURFS_ERROR });
		})
}
