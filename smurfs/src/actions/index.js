/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios'

export const FETCHING_SMURF = "FETCHING_SMURF";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS"
export const FETCHING_SMURF_FAIL = "FETCHING_SMURF_FAIL"

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

const url = "http://localhost:3333/smurfs";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURF });
  axios
    .get(url)
    .then( ({data}) => {
      console.log("response data", data)
      dispatch({ type: FETCHING_SMURF_SUCCESS, payload: data})
    })
    .catch(({data}) => {
      dispatch({
        type: FETCHING_SMURF_FAIL,
        payload: "Failed to retrieve Smurf", data
      })
    })
}
