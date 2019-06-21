import axios from 'axios'
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const GETTING_SMURF = 'GETTING_SMURF';
export const GOT_SMURF = 'GOT_SMURF';

export const ERROR = 'ERROR';

export const ADDING_SMURF = 'ADDING_SMURF';
export const ADDED_SMURF = 'ADDED_SMURF';

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

export const getSmurf = smurf =>{
  return dispatch=>{
      dispatch({type: GETTING_SMURF});
      axios.get(`http://localhost:3333/smurfs`)
        .then(res=>{
          dispatch({
            type: GOT_SMURF,
            payload: res.data
          })
        })
        .catch(err=>{
          dispatch({type: ERROR, payload: 'error fetching data', })
        })
  }
}


export const addSmurf = smurf => {
  return dispatch => {
    dispatch({ type: ADDING_SMURF });
    axios.post(`http://localhost:3333/smurfs`, smurf)
      .then(res => {
        dispatch({
          type: ADDED_SMURF,
          payload: res.data
        })
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: 'error fetching data', })
      })
  }
}

