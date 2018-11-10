import axios from 'axios'

export const GET_SMURFS = "GET_SMURFS"
export const LOADING = "LOADING"
export const ERROR = "ERROR"

export const getSmurfs = () => {
  return (dispatch) => {
    dispatch({type: LOADING})
    axios
      .get('http://localhost:3333/smurfs')
      .then( response => {
        dispatch({type: GET_SMURFS, payload: response.data})
      })
      .catch( err => {
        dispatch({type: ERROR, error: "Ya gone did smurfed!"})
      })
  }
}

// POST
export const addSmurf = (newSmurf) => {
  return (dispatch) => {
    dispatch({type: LOADING})
    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then( response => {
        dispatch({type: GET_SMURFS, payload: response.data})
      })
      .catch( err => {
        dispatch({type: ERROR, error: "Ya gone did smurfed! Name/Age/Height are all required to create a smurf in the smurf DB."})
      })
  }
} 
// DELETE

export const deleteSmurf = (id) => {
  return (dispatch) => {
    dispatch({type: LOADING})
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then( response => {
        dispatch({ type: GET_SMURFS, payload: response.data })
      })
      .catch( err => {
        dispatch({type: ERROR, error: "No smurf by that ID exists in the smurf DB"})
      })

  }
}

// PUT
export const updateSmurf = (updatedSmurf) => {
  return (dispatch) => {
    dispatch({type: LOADING})
    axios
      .put(`http://localhost:3333/smurfs/${updatedSmurf.id}`, updatedSmurf)
      .then( response => {
        dispatch({ type: GET_SMURFS, payload: response.data})
      })
      .catch( err => {
        dispatch({type: ERROR, error: "Ya gone did smurfed! Name/Age/Height are all required to create a smurf in the smurf DB."})
      } )
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
