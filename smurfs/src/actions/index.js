import axios from 'axios';
export const SMURF_FETCH = 'SMURF_FETCH';
export const SMURF_FETCHED = 'SMURF_FETCHED';

export const SMURF_ADDED = 'SMURF_ADDED';
export const SMURF_ADD = 'SMURF_ADD';


const rootURL = 'http://localhost:3333/smurfs';
export const smurfFetch = () => {
  const promise = axios.get(rootURL);
  return dispatch => {
    dispatch({ type: SMURF_FETCH })
      promise
          .then(response => {
            dispatch({ type: SMURF_FETCHED, payload: response.data });
            console.log(response.data);
          })
        .catch(err => {
          console.log(err);
        })
  }
}

export const smurfAdd = (smurf) => {
  console.log(smurf);
  const promise = axios.post(rootURL, smurf);
  return dispatch => {
    dispatch({type: SMURF_ADD });
        promise
            .then(response => {
              console.log(response.data);
              dispatch({ type: SMURF_ADDED, payload: response.data });
            })
            .catch(err => {
              console.log(err);
            });
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

