/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';
import thunk from 'redux-thunk';

export const FETCHING = 'FETCHING'; //
export const FETCHED = 'FETCHED'; //
export const ERROR = 'ERROR'; //
export const ADDING = 'ADDING';
export const ADDED = 'ADDED';

export const getSmurfs = () => dispatch => {
	dispatch({ type: FETCHING });
	axios
		.get('http://localhost:3333/smurfs')
		.then(response => {
			dispatch({ type: FETCHED, payload: response.data });
		})
		.catch(err => {
			dispatch({ type: ERROR, message: 'got an error' });
		});
};

export const addSmurf = data => dispatch => {
	dispatch({ type: ADDING });
	axios
		.post('http://localhost:3333/smurfs', {
			name: data.name,
			age: data.age,
			height: data.height + 'cm'
		})
		.then(response => {
			console.log('response=' + response.data);
			dispatch({ type: ADDED, payload: response.data });
		})
		.catch(err => {
			dispatch({ type: ERROR, message: 'addFriend got an error' });
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
