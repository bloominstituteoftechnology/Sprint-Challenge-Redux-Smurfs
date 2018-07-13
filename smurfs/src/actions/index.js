import axios from "axios";

export const GOT_SMURFS = "GOT_SMURFS";
export const GETTING_SMURFS = "GETTING_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
export const DELETING_SMURF = 'DELETING_SMURF';
export const ERROR = "ERROR";

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

export const getSmurfs = () => {
  const get = axios.get('http://localhost:3333/smurfs')

  return (dispatch) => {
    dispatch({type: GETTING_SMURFS})
    get
      .then(({data}) => {
        dispatch({
          type: GOT_SMURFS,
          smurfs: data
        })
      })
      .catch(err => {
        dispatch({ type: ERROR, err})
      })
  }
}

export const addSmurf = smurf => {
  const post = axios.post("http://localhost:3333/smurfs", smurf)

  return function(dispatch) {
    post
      .then(({data}) => {
        dispatch({
          type: ADD_SMURF, 
          smurfs: data
        })
      })
      .catch(err => {
        dispatch({ type: ERROR, err})
      })
  }
}

export const deleteSmurf = id => {
  const remove = axios.delete(`http://localhost:3333/smurfs/${id}`)

  return function(dispatch) {
    dispatch({ type: DELETING_SMURF })
    remove 
      .then(({data}) => {
        console.log('data', data)
        dispatch({
          type: GOT_SMURFS,
          smurf: data
        })
      })
      .catch(err => {
        dispatch({ type: ERROR, err})
      })
  }
}





