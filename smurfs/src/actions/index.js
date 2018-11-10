import axios from 'axios';
export const LOADING = 'LOADING';
export const GET_SMURFS = 'GET_SMURFS';
export const ERROR = 'ERROR';

const apiRoute = 'http://localhost:3333/smurfs';

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


export const addSmurf = (newSmurf) => {
  return (dispatch) => {
    dispatch({type: LOADING});
    axios.post(apiRoute, newSmurf)
      .then(res => {
        dispatch({type: GET_SMURFS, smurfs: res.data});
      })
      .catch(err => {
        dispatch({type: ERROR, errorMessage: 'Trouble retreiving smurfs'});
      })
  }
}

export const getSmurfs = () => {
  return (dispatch) => {
    dispatch({type: LOADING});
    axios.get(apiRoute)
      .then(res => {
        dispatch({type: GET_SMURFS, smurfs: res.data});
      })
      .catch(err => {
        dispatch({type: ERROR, errorMessage: 'Trouble retreiving smurfs'});
      })
  }
}

export const updateSmurf = (smurf) => {
  return (dispatch) => {
    dispatch({type: LOADING});
    axios.put(`${apiRoute}/${smurf.id}`, {
      name: smurf.name,
      age: smurf.age,
      height: smurf.height
    })
    .then(res => {
      dispatch({type: GET_SMURFS, smurfs: res.data});
    })
    .catch(err => {
      dispatch({type: ERROR, errorMessage: 'Trouble retreiving smurfs'});
    })
  }
}