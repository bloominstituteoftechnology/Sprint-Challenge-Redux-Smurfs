/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';


export const ADD_SMURFS_START = 'ADD_SMURFS_START';
export const ADD_SMURFS_SUCCESS = 'ADD_SMURFS_SUCCESS';
export const ADD_SMURFS_FAIL = 'ADD_SMURFS_FAILURE'

export const getSmurfs = () => dispatch => {
  dispatch = ({ type: ADD_SMURFS_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => 
      dispatch = ({ type: ADD_SMURFS_SUCCESS, payload: response.data})
      )
    .catch(error => {console.log(error)
      dispatch = ({ type: ADD_SMURFS_FAIL, payload: error})
    })
}

export const addSmurf = (dispatch) => {
  dispatch = ({ type: ADD_SMURFS_START })
  axios 
    .post('http://localhost:3333/smurfs')
    .then(response => 
      dispatch = ({ type: ADD_SMURFS_SUCCESS, payload: response.data })
      )
    .catch(error => {console.log(error)
      dispatch = ({ type: ADD_SMURFS_FAIL, payload: error})
    })
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
