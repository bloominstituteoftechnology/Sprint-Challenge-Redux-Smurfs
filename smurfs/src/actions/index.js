/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from 'axios';

export const FETCHING = 'FETCHING';
export const ADDING = 'ADDING';
export const UPDATING = 'UPDATING';
export const DELETING = 'DELETING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const UPDATE_FORM = 'UPDATE_FORM';

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

export const fetchSmurfs = () => dispatch => {

  dispatch({type: FETCHING});

  axios.get('http://localhost:3333/smurfs/')
    .then(res => dispatch({
      type: SUCCESS,
      payload: res.data
    }))
    .catch(err => console.log(err));

}

export const addSmurf = smurf => dispatch => {

  dispatch({type: ADDING});

  axios.post('http://localhost:3333/smurfs/', smurf)
    .then(res => dispatch({
      type: SUCCESS,
      payload: res.data
    }))
    .catch(err => console.log(err));

}

export const updateSmurf = smurf => dispatch => {

  dispatch({type: UPDATING});

  axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(res => dispatch({
      type: SUCCESS,
      payload: res.data
    }))
    .catch(err => console.log(err));

}

export const deleteSmurf = smurf => dispatch => {

  dispatch({type: DELETING});

  axios.delete(`http://localhost:3333/smurfs/${smurf.id}`)
    .then(res => dispatch({
      type: SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({type: FAILURE, payload: err}));

}

export const setFormToUpdate = smurf => {

  return {

    type: UPDATE_FORM,
    payload: smurf

  }

}
