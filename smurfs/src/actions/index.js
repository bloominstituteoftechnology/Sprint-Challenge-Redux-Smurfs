import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const ERROR = 'ERROR';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const fetchingSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: FETCHING })
    axios.get('http://localhost:3333/smurfs')
      .then( response => {
        dispatch({
          type: FETCHING_SMURFS,
          smurfs: response.data,
        })
      })

      .catch( error => {
        dispatch({
          type: ERROR,
          errorMessage: 'Trouble finding Smurfs, please try again later',
        })
      })
  }
}

export const addingSmurf = (newSmurf) => {
  return (dispatch) => {
    dispatch({ type: FETCHING });
    axios.post('http://localhost:3333/smurfs', newSmurf)
      .then( response => {
        dispatch({
          type: FETCHING_SMURFS,
          smurfs: response.data,
        });
      })

      .catch( error => {
        dispatch({
          type: ERROR,
          errorMessage: 'Trouble creating new Smurf, please try again later',
        });
      });
  }
};

export const deleteSmurf = (id) => {
  return (dispatch) => {
    dispatch({ type: FETCHING });
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then( response => {
      dispatch({
        type: FETCHING_SMURFS,
        smurfs: response.data,
      });
    })

    .catch( error => {
      dispatch({
        type: ERROR,
        errorMessage: 'Trouble deleting Smurf',
      })
    })
  }
}

export const updateSmurf = (updatedSmurf) => {
  return (dispatch) => {
    dispatch({ type: FETCHING })
    axios.put(`http://localhost:3333/smurfs/${updatedSmurf.id}`, updatedSmurf)
      .then( response => {
        dispatch({ 
          type: FETCHING_SMURFS,
          smurfs: response.data})
      })
      .catch( error => {
        dispatch({
          type: ERROR,
          errorMessage: "Trouble updating Smurf",
        })
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
