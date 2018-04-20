import axios from 'axios';

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const SMURFS_RECIEVED = "SMURFS_RECIEVED";
export const ERROR_FETCHING_SMURFS = "ERROR_FETCHING_SMURFS";

export const ADDING_SMURFS = "ADDING_SMURFS";
export const SMURFS_ADDED = "SMURFS_ADDED";
export const ERROR_ADDING_SMURFS = "ERROR_ADDING_SMURFS";

export const UPDATE_SMURFS = "UPDATE_SMURFS";
export const SMURFS_UPDATED = "SMURFS_UPDATED";
export const ERROR_UPDATING_SMURFS = "ERROR_UPDATING_SMURFS";

export const DELETING_SMURFS = "DELETING_SMURFS";
export const SMURFS_DELETED = "SMURFS_DELETED";
export const ERROR_DELETING_SMURFS = "ERROR_DELETING_SMURFS";


export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    axios
      .get(`http://localhost:3333/smurfs/get`)
      .then(({ data }) => {
        dispatch({ type: SMURFS_RECIEVED, payload: data });
      })
      .catch(error => {
        dispatch({ type: ERROR_FETCHING_SMURFS, payload: error });
      });
  };
};

export const addSmurfs = data => {
  return dispatch => {
		dispatch({ type: ADDING_SMURFS });
		axios
			.post('http://localhost:3333/smurfs/create', data)
			.then(({data}) => {
				dispatch({ type: SMURFS_ADDED, payload: data });
			})
			.catch(error => {
				dispatch({ type: ERROR_ADDING_SMURFS, payload: error });
			});
  };
};

export const deleteSmurfs = () => {
	return dispatch => {
		dispatch({ type: DELETING_SMURFS });
		axios
			.delete('http://localhost:3333/smurfs/delete')
			.then(({ data }) => dispatch({ type: SMURFS_DELETED, payload: data }))
			.catch(error => {
				dispatch({ type: ERROR_DELETING_SMURFS, payload: error });
			});
	};
};

export const updateFriend = () => {
	return dispatch => {
		dispatch({ type: UPDATE_SMURFS });
		axios
			.delete('http://localhost:3333/smurfs/update')
			.then(({ data }) => {
				dispatch({ type: SMURFS_UPDATED, payload: data });
			})
			.catch(error => {
				dispatch({ type: ERROR_UPDATING_SMURFS, payload: error });
			});
	};
};






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
