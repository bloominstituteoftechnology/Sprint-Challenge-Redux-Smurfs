/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios'


export const FETCHING_SMURF = "FETCHING_SMURF";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS"
export const FETCHING_SMURF_FAIL = "FETCHING_SMURF_FAIL"

export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";

export const DELETE_SMURF = "DELETE_SMURF";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAIL = "DELETE_SMURF_FAIL";

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

export const addSmurf = (smurf) => dispatch => {
  dispatch({ type: ADD_SMURF });
  axios
    .post(url, smurf)
    .then(({ data }) => {
      dispatch({ type: ADD_SMURF_SUCCESS, payload: [...data]})
    })
    .catch(error => {
      dispatch({
        type: ADD_SMURF_FAIL,
        payload: "Failed adding smurf", error
      })
    })
}

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF });
  axios
    .delete(`${url}/${id}`)
    .then(({ data }) => {
      dispatch({
        type: DELETE_SMURF_SUCCESS,
        payload: data
      })
    })
    .catch(error => {
      dispatch({
        type: DELETE_SMURF_FAIL,
        payload: "Failed deleting smurf", error
      })
    })
}
