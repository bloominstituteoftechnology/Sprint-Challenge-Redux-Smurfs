/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

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
import axios from "axios";

// import { newSmurf } from '../components/AddSmurfForm/AddSmurfForm';

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const ADD_NEW_SMURF = "ADD_NEW_SMURF";


export const getSmurfs = () => dispatch => {
	dispatch({ type: FETCHING });
	axios
		.get("http://localhost:3333/smurfs")
		.then(res => {
			console.log("Server Response: ", res);
			dispatch({
				type: SUCCESS,
				payload: res.data,
			});
		})
		.catch(err => {
			console.log("Server Error: ", err);
			dispatch({
				type: FAILURE,
				payload: err,
			});
		});
};

// export const addNewSmurf = () => {
//   // dispatch({ type: ADD_NEW_SMURF });
  
// 	axios
// 		.post("http://localhost:3333/smurfs", newSmurf)
// 		.then(res => {
// 			console.log("Server Response: ", res);
// 			// dispatch({
// 			// 	type: SUCCESS,
// 			// 	payload: res.data,
// 			// });
// 		})
// 		.catch(err => {
// 			console.log("Server Error: ", err);
// 			// dispatch({
// 			// 	type: FAILURE,
// 			// 	payload: err,
// 			// });
// 		});
// }