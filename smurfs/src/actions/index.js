import axios from 'axios'

/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const ADDING_SMURF = 'ADDING_SMURF';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS'
export const ADDED_SMURF = 'ADDED_SMURF'
export const ERROR = 'ERROR'
export const DELETING_SMURF = 'DELETING_SMURF'
export const DELETED_SMURF = 'DELETED_SMURF'
export const UPDATING_SMURF = 'UPDATING_SMURF'
export const UPDATED_SMURF = 'UPDATED_SMURF'


export const fetched = () => {
  const request = axios.get('http://localhost:3333/smurfs/')
  return (dispatch) => {
    dispatch({ type: FETCHING_SMURFS });
    request
      .then(data => {
        dispatch({
          type: FETCHED_SMURFS,
          payload: data
        })
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err,
        })
      })
  }
}

export const added = (values) => {
  const request = axios.post('http://localhost:3333/smurfs', values)
  return (dispatch) => {
    dispatch({ type: ADDING_SMURF })
    request
      .then((data) => {
        console.log("data", data)
        dispatch({
          type: ADDED_SMURF,
          payload: data.data
        })
      })
      .catch(err => console.log(err));
  }
}

export const deleted = (id) => {
  console.log("action del", id)
  const request = axios.delete(`http://localhost:3333/smurfs/${id}`);
  return (dispatch) => {
    dispatch({ type: DELETING_SMURF });
    request
      .then(data => {
        dispatch({
          type: DELETED_SMURF,
          payload: data.data
        })
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err,
        })
      })
  }
};

export const updated = (Obj, id) => {
  const request = axios.put(`http://localhost:3333/smurfs/${id}`, Obj)
  return (dispatch) => {
    dispatch({ type: UPDATING_SMURF })
    request
      .then((data) => {
        dispatch({
          type: UPDATED_SMURF,
          payload: data.data
        })
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err,
        })
      })
  }
};

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
