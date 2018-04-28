import axios from 'axios';
export const PENDING = 'PENDING';
export const ERROR = 'ERROR';
export const SUCCESS = 'SUCCESS';
export const UPDATING = "UPDATING";

export const getSmurfs = () => {
  return (dispatch) => {
    dispatch( { type: PENDING });
    axios
      .get('http://localhost:3333/smurfs')
      .then( response => {
        dispatch( { type: SUCCESS, smurfs: response.data })
      })
      .catch( err => {
        dispatch({type: ERROR, error: 'ERROR FETCHING VILLAGERS'})
      })
  }
}

export const createSmurf = (smurf) => {
  return (dispatch) => {
    dispatch({ type: PENDING });
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(response => {
        dispatch({ type: SUCCESS, smurfs: response.data })
      })
      .catch(err => {
        dispatch({ type: ERROR, error: 'ERROR ADDING VILLAGER' })
      })
  }
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
