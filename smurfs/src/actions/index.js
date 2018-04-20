import axios from 'axios';

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const SUCCESS_FETCHING = "SUCCESS_FETCHING";

export const CREATING_SMURFS = "CREATING_SMURFS";
export const SUCCESS_CREATING = "SUCCESS_CREATING";

export const REJECTED = "REJECTED";


export const getSmurfs = () => {
  const promise = axios.get(`http://localhost:3333/smurfs/get`)
    return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    promise
      .then(response => {
        dispatch({ type: SUCCESS_FETCHING, payload: [] });
      })
      .catch(error => {
        dispatch({ type: REJECTED, payload: 'Error fetching Smurfs.' });
      });
  };
};

export const addSmurfs = smurf => {
  const promise = axios.post('http://localhost:3333/smurfs/create', smurf);
  return dispatch => {
		dispatch({ type: CREATING_SMURFS });
		promise
			.then(response => {
				dispatch({ type: SUCCESS_CREATING, payload: [] });
			})
			.catch(error => {
				dispatch({ type: REJECTED, payload: 'Error creating Smurfs.' });
			});
  };
};

// export const deleteSmurfs = () => {
// 	return dispatch => {
// 		dispatch({ type: DELETING_SMURFS });
// 		axios
// 			.delete('http://localhost:3333/smurfs/delete')
// 			.then(({ data }) => dispatch({ type: SMURFS_DELETED, payload: data }))
// 			.catch(error => {
// 				dispatch({ type: ERROR_DELETING_SMURFS, payload: error });
// 			});
// 	};
// };

// export const updateFriend = () => {
// 	return dispatch => {
// 		dispatch({ type: UPDATE_SMURFS });
// 		axios
// 			.delete('http://localhost:3333/smurfs/update')
// 			.then(({ data }) => {
// 				dispatch({ type: SMURFS_UPDATED, payload: data });
// 			})
// 			.catch(error => {
// 				dispatch({ type: ERROR_UPDATING_SMURFS, payload: error });
// 			});
// 	};
// };






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
