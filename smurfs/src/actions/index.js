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
import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ON_HANDLE_SUBMIT = 'ON_HANDLE_SUBMIT';
export const UPDATE_SMURF = 'UPDATE_SMURF';

export const fetch_smurfs = () => dispatch => {
    dispatch({ type: FETCH_START });
    // console.log('from fetch!')
    axios
        .get('http://localhost:3333/smurfs')
        .then(response => {
            // console.log('response from fetch_smurfs', response)
            dispatch({ type: FETCH_SUCCESS, payload: response.data})
            })
        .catch(err => {
            dispatch({ type: FETCH_FAILURE, payload: err })
        });
};

export const onHandleSubmit = (newSmurf) => dispatch => {
    dispatch({ type: ON_HANDLE_SUBMIT });
    // console.log('onHandleSubmit', newSmurf)
    axios 
        .post('http://localhost:3333/smurfs', newSmurf)
        .then(response => {
            dispatch({ type: FETCH_SUCCESS, payload: response.data})
        })
    .catch(err => {
        dispatch({ type: FETCH_FAILURE, payload: err })
    });
};

export const onUpdateSmurf = (myUpdatedSmurf) => dispatch => {
    dispatch({ type: UPDATE_SMURF });
    console.log('onUpdateSmurf', myUpdatedSmurf)
    axios 
        // .put(`http://localhost:3333/smurfs/${myUpdatedSmurf.id}`, myUpdatedSmurf)
          .put(`http://localhost:3333/smurfs/${myUpdatedSmurf.id}`, myUpdatedSmurf)
        .then(response => {
          console.log('onUpdateSmurf', response.data.id)
            dispatch({ type: FETCH_SUCCESS, payload: response.data})
        })
    .catch(err => {
        dispatch({ type: FETCH_FAILURE, payload: err })
    });
};