/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

//GET
export const GET_SMURFS = 'GET_SMURFS';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILURE = 'GET_FAILURE';

//ADD
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';

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

const url = `http://localhost:3333/smurfs`;

export const getSmurfs = () => {
  return function(dispatch) {
    dispatch({type: GET_SMURFS});
    axios.get(url)
      .then(function(response) {
          dispatch({type: GET_SUCCESS, payload: response.data})
        })
      .catch(function(error){
        console.log(error)
        dispatch({type: GET_FAILURE, error: error})
      })
  }
}

export const addSmurf = (smurf) => {
  return function(dispatch) {
    dispatch({type: ADD_SMURF});
    axios.post(url, {
      name: smurf.name,
      age: smurf.age,
      height: smurf.height
    })
      .then(function(response){
        console.log(response);
        dispatch({type: ADD_SUCCESS})
      })
      .catch(function(error){
        console.log(error)
        dispatch({type: ADD_FAILURE, error: error})
      })
  }
}
