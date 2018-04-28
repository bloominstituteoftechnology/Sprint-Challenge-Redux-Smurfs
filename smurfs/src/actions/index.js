import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const ADDING = 'ADDED';
export const ADDED = 'ADDED';
export const DELETED = 'DELETED';
export const UPDATED = 'UPDATED';

export const getSmurfs = () => {
  console.log('GETTING SMURFS');
  return dispatch => {
    dispatch({type: FETCHING})
      axios.get('http://localhost:3333/smurfs')
        .then(response => {
          console.log('RESPONSE.DATA', response.data);
          dispatch({type: FETCHED, smurfs: response.data})
        })
        .catch(error => {
          dispatch({type: ERROR, error: error})
        })
    }
}

export const addSmurf = (newSmurf) => {
  return dispatch => {
      axios.post('http://localhost:3333/smurfs', newSmurf)
      .then(response => {
        dispatch({type: ADDED, smurfs: response.data})
      })
      .catch(error => {
        dispatch({type: ERROR, error: error})
      })

  }
}

export const deleteSmurf = (id) => {
  return dispatch => {
      axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        dispatch({type: DELETED, smurfs: response.data})
      })
      .catch(error => {
        dispatch({type: ERROR, error: error})
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
