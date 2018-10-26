import axios from 'axios';

export const ERROR ='ERROR';
export const GETTING_SMURFS = 'GETTING_SMURFS';
export const SMURF_SUCCESS = 'SMURF_SUCCESS';
export const CREATING_SMURF = 'CREATING_SMURF';
export const CREATE_SUCCESS = 'CREATE_SUCCESS';

export const getSmurfs = () => dispatch => {
    dispatch( {type: GETTING_SMURFS} );
    axios
    .get('http://localhost:3333/smurfs')
    .then( response => {
      console.log('response', response);
      dispatch({ type: SMURF_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: ERROR, payload: error });
    })
}

export const createSmurf = smurf => dispatch => {
  dispatch( {type: CREATING_SMURF });
  axios
  .post('http://localhost:3333/smurfs', smurf)
  .then(({ data}) => {
    dispatch({ type: CREATE_SUCCESS, payload: data });
  })
  .catch(error => {
    dispatch({ type: ERROR, payload: error});
  })
}



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
