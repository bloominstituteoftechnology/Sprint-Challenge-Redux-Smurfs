/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like,, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
import axios from "axios";

// import { newSmurf } from '../components/AddSmurfForm/AddSmurfForm';

export const PENDING = "PENDING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";


export const getSmurfs = () => {
	const smurfs = axios.get("http://localhost:3333/smurfs");
	return dispatch => {
		dispatch({ type: PENDING });
		smurfs
			.then(res => {
				console.log("PENDING > Server Response: ", res);
				dispatch({
					type: SUCCESS,
					payload: res.data,
				});
			})
			.catch(err => {
				console.log("PENDING > Server Error: ", err);
				dispatch({
					type: FAILURE,
					payload: err,
				});
			});
	}
};

export const addNewSmurf = (name, age, height) => {
	const smurfs = axios.post("http://localhost:3333/smurfs", name, age, height);
	return dispatch => {
		dispatch({ type: PENDING });
		smurfs
			.then(res => {
				console.log("ADDING > Server Response: ", res);
				dispatch(getSmurfs())
				// 	{
				// 	type: SUCCESS,
				// 	payload: res.data,
				// });
			})
			.catch(err => {
				console.log("ADDING > Server Error: ", err);
				dispatch({
					type: FAILURE,
					payload: err,
				});
			});
	}
};