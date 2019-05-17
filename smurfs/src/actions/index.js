import axios from 'axios';
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_GOOD = 'FETCH_DATA_GOOD';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';



export const getTheSmurfs = () => {
    return dispatch => {
        dispatch({ type: FETCH_DATA_START })
        axios.get('http://localhost:3333/smurfs')
            .then(res => {
                dispatch({ type: FETCH_DATA_GOOD, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FETCH_DATA_FAIL, payload: err })
            })
    }
}

export const addANewSmurf = newSmurfData => {
    return dispatch => {
        dispatch({ type: FETCH_DATA_START })
        axios.post('http://localhost:3333/smurfs', newSmurfData)
            .then(res => {
                dispatch({ type: FETCH_DATA_GOOD, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FETCH_DATA_FAIL, payload: err })
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