import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCH_SMURFS = 'FETCHING_SMURFS';
export const UPLOADED_SMURFS = 'UPLOADED_SMURFS';
export const ADD_SMURFS = 'ADD_SMURFS';
export const NEWLY_ADDED_SMURFS = 'NEWLY_ADDED_SMURFS';
export const GET_SMURFS = 'GET_SMURFS';
export const DELETE_SMURFS = 'DELETE_SMURFS';
export const ERROR = 'ERROR';

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

export const getSmurfs = () => {
	return dispatch => {
		dispatch({ type: FETCH_SMURFS })
		axios.get('http://localhost:3333/smurfs')	
		.then(({ data }) => {
			dispatch({ type: UPLOADED_SMURFS, payload: data })
			})
		.catch(error => {
				dispatch({ type: ERROR, payload: error })
			})
	 }
}

export const addSmurf = (smurf) => {
	return dispatch => {
		dispatch({ type: ADD_SMURFS, })
		axios.post('http://localhost:3333/smurfs', smurf)
		.then(( { data }) => {
			dispatch({ type: NEWLY_ADDED_SMURFS })
   })
	  .then(() => {
				dispatch({ type: FETCH_SMURFS })
				axios.get('http://localhost:3333/smurfs')
				.then(({ data }) => {
						dispatch({ type: UPLOADED_SMURFS, payload: data })
					})
				.catch(error => {
						dispatch({ type: ERROR, payload: error })
					})
       })
		   .catch(error => {
             dispatch({ type: ERROR, payload: error })
           })
         }
     }  
