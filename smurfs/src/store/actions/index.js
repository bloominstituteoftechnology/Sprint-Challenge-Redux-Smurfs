import axios from 'axios';
/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
/*
  For this project you'll need at least 2 action creators for the main portion,
*/

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ADDING = "ADDING"
export const ADDED = 'ADDED'
export const ERROR = 'ERROR'
/*   and 2 more for the stretch problem. */

/*
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
const url = `http://localhost:3333/smurfs`

export const getSmurfs = ( ) => {
  return (dispatch) => {
    dispatch({type: FETCHING});
    axios.get(url)
      .then(response => {
        dispatch({type: FETCHED, payload: response.data})
      })
      .catch(error => {
        dispatch({type:ERROR, payload: error})
      })
  }
}

export const addSmurf = smurf => {
  return(dispatch) => {
    dispatch({type: ADDING});
    axios.post(url, {
      name: smurf.name,
      age: smurf.age,
      height: smurf.height
    })
    .then(response =>{
      dispatch({type: ADDED, payload: response.data})
    })
    .catch(error => {
      dispatch({type: ERROR, payload: error})
    })
  }
}
