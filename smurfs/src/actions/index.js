import axios from 'axios';
export const PENDING = 'PENDING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const fetch_smurfs = () => {
  return (dispatch) => {
    dispatch({type: PENDING});
    axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({type:SUCCESS, smurfs: response.data})
    })
    .catch((error) => {
      dispatch({type: ERROR, payload: 'ERROR FINDING SMURFS' })
    })
  }
}

export const addSmurf = (newSmurf) => {
  return dispatch => {
      dispatch({  type: PENDING});
      axios
          .post('http://localhost:3333/smurfs', newSmurf)
          .then( response => {
              dispatch({ type: SUCCESS, smurfs: response.data })
          })
          .catch( () => {
              dispatch( {type: ERROR, error: 'ERROR ADDING SMURF'})
          })
  }
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
