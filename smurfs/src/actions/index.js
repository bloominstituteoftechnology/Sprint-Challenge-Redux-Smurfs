import axios from 'axios'

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
export const FETCH_START = 'fetch-start'
export const FETCH_ERROR = 'fetch-error'
export const FETCHED_SMURFS = 'fetched-smurfs'
export const FETCHED_SMURF = 'fetched-smurf'
export const UPDATING_SMURF = 'updating-smurf'
export const UPDATED_SMURF = 'updated-smurf'
export const DELETING_SMURF = 'deleting-smurf'
export const DELETED_SMURF = 'deleted-smurf'

const fetchStart = () => ({ type: FETCH_START })
const fetchError = (payload) => ({ type: FETCH_ERROR, payload })
const fetchedSmurfs = (payload) => ({ type: FETCHED_SMURFS, payload })
const fetchedSmurf = (payload) => ({ type: FETCHED_SMURF, payload })
const updatingSmurf = () => ({ type: UPDATING_SMURF })
const updatedSmurf = () => ({ type: UPDATED_SMURF })
const deletingSmurf = () => ({ type: DELETING_SMURF })
const deletedSmurf = () => ({ type: DELETED_SMURF })

export const fetchSmurfs = () => (dispatch) => {
  dispatch(fetchStart())
  axios.get('http://localhost:3333/smurfs/')
    .then(({ data }) => {
      console.log(data)
      dispatch(fetchedSmurfs(data))
    })
    .catch((error) => dispatch(fetchError(error)))
}

export const fetchSmurf = (id) => (dispatch) => {
  dispatch(fetchStart())
  axios.get(`http://localhost:3333/smurfs/${id}`)
  .then(({ data }) => {
      dispatch(fetchedSmurf(data))
      dispatch(updatingSmurf())
    })
    .catch((error) => dispatch(fetchError(error)))
}

export const createSmurf = ({ name, age, height }) => (dispatch) => {
  const smurf = { name, age, height }
  console.log(smurf)
  dispatch(fetchStart())
  axios.post('http://localhost:3333/smurfs/', smurf)
    .then(({ data }) => dispatch(fetchedSmurfs(data)))
    .catch((error) => dispatch(fetchError(error)))
}

export const updateSmurf = (smurf) => (dispatch) => {
  dispatch(fetchStart())
  axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(({ data }) => {
      console.log(data)
      dispatch(fetchedSmurfs(data))
      dispatch(updatedSmurf())
    })
    .catch((error) => dispatch(fetchError(error)))
}

export const deleteSmurf = (id) => (dispatch) => {
  dispatch(fetchStart())
  dispatch(deletingSmurf())
  axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(({ data }) => {
      console.log(data)
      dispatch(fetchedSmurfs(data))
      dispatch(deletedSmurf())
    })
    .catch((error) => dispatch(fetchError(error)))
}