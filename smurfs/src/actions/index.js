/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCESS";
export const FETCH_FAILURE = "FETCH_FAILURE"; 

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
  dispatch({ type: FETCH_START });
    axios
        .get('http://localhost:3333/smurfs')
        .then(({data}) => {
            dispatch({ 
                type: FETCH_SUCCESS, 
                payload: data 
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_FAILURE,
                payload: err
            })
        })
}

export const addSmurf = newSmurf => dispatch => {
  axios
      .post('http://localhost:3333/smurfs', {
          name: newSmurf.name,
          age: newSmurf.age,
          height: newSmurf.height
      })
      .then(({data}) => {
          dispatch({
              type: FETCH_SUCCESS,
              payload: data
          })
      })
      .catch(err => {
          dispatch({
              type: FETCH_FAILURE,
              payload: err
          })
      })
}

export const editSmurf = (editedSmurf, id) => dispatch => {
    axios
        .put(`http://localhost:3333/smurfs/${id}`, {
            name: editedSmurf.name,
            age: editedSmurf.age,
            height: editedSmurf.height,
        })
        .then(({data}) => {
            dispatch({
                type: FETCH_SUCCESS,
                payload: data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_FAILURE,
                payload: err
            })
        })
}

export const deleteSmurf = id => dispatch => {
    axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(({data}) => {
            dispatch({
                type: FETCH_SUCCESS,
                payload: data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_FAILURE,
                payload: err
            })
        })
}