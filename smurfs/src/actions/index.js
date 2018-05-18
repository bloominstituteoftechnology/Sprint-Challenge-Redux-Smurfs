import axios from 'axios';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const ERROR ='ERROR';
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

export const fetchSmurfs = () => {
  const getSmurfs = axios.get('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({ type: FETHCING_SMURFS });
    getSmurfs
      .then(smurfData => {
        console.log("Smurf Data:", smurfData)
        dispatch({
          type: SMURFS_FETCHED,
          payload: smurfData.data
        })
      })
      .catch(err => {
        console.log("ERROR:", err)
        dispatch({
          type: ERROR,
          payload: err
        })
      })
  }
}