import axios from 'axios';

export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR';
export const ADD_SMURF = 'ADD_SMURF';

export const getSmurfs = () => dispatch => {
  axios
    .get('http://localhost:3333/smurfs')
    .then(({data}) => {
      dispatch({ type: FETCH_SMURFS_SUCCESS, smurfs: data })
    })
    .catch(error => {
      dipatch({ type: FETCH_SMURFS_ERROR })
    })
}

export const addSmurfs = () => dispatch => {
  axios
    .post('http://localhost:3333/smurfs', {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    })
    .then(({data}) => {
      dispatch({ type: ADD_SMURF, smurfs: data })
    })
}

/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf (create)
   R - getSmurfs (fetch)
   U - updateSmurf (update)
   D - deleteSmurf (delete)
*/
