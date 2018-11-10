import axios from 'axios';
export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

//actions below
// R - read - axios get
export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: LOADING })
    axios.get('http://localhost:3333')
      .then(response => {
        console.log(response)
        dispatch({ type: SUCCESS, smurfs: response.data })
      })
      .catch(err => {
        dispatch({ type: FAILURE, error: 'Failed to load smurfs'})
      })
  }
}

// C - create - axios post
export const addSmurf = (newSmurf) => {
  return dispatch => {
    dispatch({ type: LOADING })
    axios.post('http://localhost:3333/smurfs', newSmurf)
      .then(response => {
        dispatch({ type: SUCCESS, smurfs: response.data })
      })
      .catch(err => {
        dispatch({ type: FAILURE, error: 'Failed to add smurf'})
      })
  }
}

// U - Update - axious put
export const updateSmurf = (updatedSmurf) => {
  return dispatch => {
    dispatch({ type: LOADING })
    axios.put(`http://localhost:3333/smurfs/${updatedSmurf.id}`, updatedSmurf)
      .then(response => {
        dispatch({ type: SUCCESS, smurfs: response.data })
      })
      .catch(err => {
        dispatch({ type: FAILURE, error: 'Failed to update smurf'})
      })
  }
}

// D - Delete - axios delete
export const deleteSmurf = (id) => {
  return dispatch => {
    dispatch({ type: LOADING })
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        dispatch({ type: SUCCESS, smurfs: response.data })
      })
      .catch(err => {
        dispatch({ type: FAILURE, error: 'Failed to delete smurf'})
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
