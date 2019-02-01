import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';

export const ADDING_SMURFS = 'ADDING_SMURFS';
export const ADDING_SMURFS_SUCCESS = 'ADDING_SMURFS_SUCCESS';
export const ADDING_SMURFS_FAILURE = 'ADDING_SMURFS_FAILURE';

export const DELETING_SMURFS = 'DELETING_SMURFS';
export const DELETING_SMURFS_SUCCESS = 'DELETING_SMURFS_SUCCESS';
export const DELETING_SMURFS_FAILURE = 'DELETING_SMURFS_FAILURE';


export const EDITING_SMURFS = 'EDITING_SMURFS';
export const EDITING_SMURFS_SUCCESS = 'EDITING_SMURFS_SUCCESS';
export const EDITING_SMURFS_FAILURE = 'EDITING_SMURFS_FAILURE';


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

export const editSmurf = (id,data) => dispatch => {

  dispatch({ type: EDITING_SMURFS });

  axios
    .put(`http://localhost:3333/smurfs/${id}`,data)
    .then(response => {
      dispatch({ type: EDITING_SMURFS_SUCCESS, payload: response.data});
    })
    .catch(error => {
      dispatch({ type: EDITING_SMURFS_FAILURE, payload: error });
  });
};


export const deleteSmurf = (id) => dispatch => {

  dispatch({ type: DELETING_SMURFS });

  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      dispatch({ type: DELETING_SMURFS_SUCCESS, payload: response.data});
    })
    .catch(error => {
      dispatch({ type: DELETING_SMURFS_FAILURE, payload: error });
  });
};

export const fetchSmurfs = () => dispatch => {

  dispatch({ type: FETCHING_SMURFS });

  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: response.data});
    })
    .catch(error => {
      dispatch({ type: FETCHING_SMURFS_FAILURE, payload: error });
  });
};


export const addingSmurf = (newSmurf) => dispatch => {

  dispatch({ type: ADDING_SMURFS });

  axios
    .post('http://localhost:3333/smurfs',newSmurf)
    .then(response => {
      dispatch({ type: ADDING_SMURFS_SUCCESS, payload: response.data});
    })
    .catch(error => {
      dispatch({ type: ADDING_SMURFS_FAILURE, payload: error });
  });
};
