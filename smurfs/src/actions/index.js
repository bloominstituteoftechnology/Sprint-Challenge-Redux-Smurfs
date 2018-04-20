import axios from "axios"
export const POSTING = "POSTING"
export const FETCHING = "FETCHING"
export const ERROR = "ERROR"


export function fetch_smurf() {
  return(dispatch) => {
    dispatch({type: FETCHING})
    axios.get('http://localhost:3333/smurfs')
      .then((response) => {
        console.log('response', response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function post_smurf() {
  return(dispatch) => {
    dispatch({type: POSTING })
    axios.post('http://localhost:3333/smurfs')
      .then((response) => {
        dispatch(fetch_smurf());
      })
      .catch((err) => {
        console.log(err)
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
