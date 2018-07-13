import axios from "axios";
export const FETCHING_SMURF = "FETCHING_SMURF";
export const FETCHED_SMURF = "FETCHED_SMURF";
export const FETCHING_ERROR = "FETCHING_ERROR";
export const POSTING_SMURF = "POSTING SMURF";
export const POSTED_SMURF = "POSTED_SMURF";
export const POSTING_ERROR = "POSTING_ERROR"

export const getSmurfs = () => {
  return function(dispatch) {
        dispatch({type: FETCHING_SMURF});
        axios.get(`http://localhost:3333/smurfs`)
          .then((smurfs) => {
              dispatch({ type: FETCHED_SMURF, payload: smurfs});
            })
          .catch(error => {
              dispatch({type: FETCHING_ERROR, payload: console.log(error)});
            })
    };
}
export const postSmurfs = () =>{
  return function(dispatch){
    dispatch({type: POSTING_SMURF});
    axios.post(`http://localhost:3333/smurfs`)
    .catch(error => {
      dispatch({type: POSTING_ERROR, payload: console.log(error)})
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
