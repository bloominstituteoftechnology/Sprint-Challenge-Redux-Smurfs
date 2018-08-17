import axios from 'axios' 

export const FETCH_SMURFS = 'FETCH_SMURFS'
export const FETCHED_SMURFS = 'FETCHED_SMURFS'
export const ADDING_SMURF = 'ADDING_SMURF'
export const ADDED_SMURF ='ADD_SMURF'
export const DELETING_USER = 'DELETING_SMURF'
export const DELETED_USER = 'DELETED_SMURF'
export const UPDATING_SMURF = 'UPDATING_SMURF'
export const UPDATED_SMURF = 'UPDATED_SMURF'
export const  ERROR = 'ERROR'

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
  return dispatch => {
    dispatch({ type: FETCH_SMURFS })
    axios.get(`http://localhost:3333/smurfs`)
      .then(res => {
        dispatch({ type: FETCHED_SMURFS, payload: res.data })
      })
      .catch (err => dispatch({ type: ERROR, error: err }))
  }
}

export const addSmurf = smurf => {
  return dispatch => {
    dispatch({ type: ADDING_SMURF })
    axios.post(`http://localhost:3333/smurfs`, {
      name: smurf.name,
      age: smurf.age,
      height: smurf.height
    })
      .then(res => {
        console.log(res)
        dispatch({ type: ADDED_SMURF, payload: res.data})
      })
      .catch (err => dispatch({ type: ERROR, error: err }))
  }
}

export const deleteSmurf = smurfID => {
  return dispatch => {
    console.log(`~~~~~~~~~~DELETE~~~~~~~~~~~~`)
    console.log(smurfID)
    dispatch({ type: DELETING_USER })
    axios.delete(`http://localhost:3333/smurfs/${smurfID}`)
      .then(res => {
        dispatch({ type: DELETED_USER, payload: res.data})
      })
      .catch(err => dispatch({ type: ERROR, payload: err }))
  }
}

export const updateSmurf = smurf => {
  return dispatch => {
    console.log(`^^^^^^^^UPDATE^^^^^^^^`)
    console.log(smurf)
    dispatch({ type: UPDATING_SMURF})
    axios.put(`http://localhost:3333/smurfs/${smurf.id}`, {
      name: smurf.name,
      age: smurf.age,
      height: smurf.height,
      id: smurf.id
    })
      .then(res => {
        dispatch({ type: UPDATED_SMURF, payload: res.data })
      })
      .catch(err => dispatch({ type: ERROR, payload: err}))
  }
}
