import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

//export const LOADING = 'LOADING';
export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';
export const GOT_SMURFS = 'GOT_SMURFS';
export const UPD_SMURF = 'UPD_SMURF';
export const DEL_SMURF = 'DEL_SMURF';
export const ERROR = 'ERROR';


export const showSmurfAction = () => dispatch => {
  dispatch({ type: SHOW_LOADING  });
  
  axios
  .get('http://localhost:3333/smurfs')
  .then(({ data }) => {
    dispatch({ type: GOT_SMURFS, payload: data })
  })
  .catch(error => {
    dispatch({ type: ERROR })
  });
}

export const addSmurfAction = (smurf) => dispatch => {
  dispatch({ type: SHOW_LOADING  });
  
  axios
  .post('http://localhost:3333/smurfs', smurf)
  .then(({ data }) => {
    dispatch({ type: UPD_SMURF, payload: data })
  })
  .catch(error => {
    dispatch({ type: ERROR })
  });
}




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
