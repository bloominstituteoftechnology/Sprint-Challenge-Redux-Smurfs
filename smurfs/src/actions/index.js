
import axios from 'axios'
export const GATHERING = 'GATHERING'
export const SUCCESS = 'SUCCESS'
export const ERROR = 'ERROR'
export const NEW = 'NEW'
export const UPDATE = 'UPDATE'
export const GONE = 'GONE'


export const getSmurfs = () => {

  return (dispatch) => {
        dispatch ({type: GATHERING})
        axios.get('http://localhost:3333/smurfs')
        .then(response => {
          dispatch({type: SUCCESS, smurfs: response.data})})
        .catch(err => {
          dispatch({type: ERROR, errorMessage: 'Smurfs are almost extinct! This Smurf village has population 0, try another village!'})
        })
  }

}

export const newSmurf = (smurf) => {
  return (dispatch) => {
    dispatch ({type: GATHERING})
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(response => {
      dispatch({type: NEW, smurfs: response.data})})
      .catch(err => {dispatch({type:ERROR, errorMessage: 'Smurf did not pass background check.'})
    })
  }
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
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
