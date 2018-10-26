import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const GOT_SMURFS = 'GOT_SMURFS';
// export const ADD_SMURF = 'ADD_SMURF';


export const getSmurfs = () => dispatch => {
  return (
    axios
      .get('http://localhost:3333/smurfs')
      .then(({ data }) => {
        dispatch({ type: GOT_SMURFS, payload: data })
      })
      .catch(error => console.log(error))
  )
}

export const addSmurf = (newSmurf) => dispatch => {
  return (
    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(({ data }) => {
        dispatch({ type: GOT_SMURFS, payload: data })
      })
      .catch(error => console.log(error))
  )
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
