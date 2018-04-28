import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const DELETING = 'DELETING';
export const DELETED = 'DELETED';
export const PENDING = 'PENDING';
export const UPDATED = 'UPDATED';

export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        dispatch({ type: SUCCESS, smurfs: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, error: 'No Smurfs Found'});
      });
  }
}
export const addSmurf = smurf => {
  return dispatch => {
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(response => {
      dispatch({ type: SUCCESS, smurfs: response.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, error: 'Cannot Add New Smurf' })
    })
  }
}
export const deleteSmurf = id => {
  return dispatch => {
    dispatch({ type: DELETING })
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      setTimeout(() => {
        dispatch({ type: DELETED, smurf: response.data.SmurfRemoved})
      }, 2000)
    })
    .catch(err => {
      dispatch({ type: ERROR, error: "Could Not Delete Smurf"})
    })
  }
}
export const pending = () => {
  return { type: PENDING }
}
export const updateSmurf = smurf => {
  return dispatch => {
    axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(response => {
      console.log(response);
      dispatch({ type: UPDATED, smurf: response.data})
    })
    .catch(err => {
      dispatch({ type: ERROR, error: 'Could Not Update Smurf'})
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
