import axios from 'axios';
  
export const POSTING = 'POSTING';
export const POSTED = 'POSTED';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

export const fetch_smurfs = () => {
  const request = axios.get('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({ type: FETCHING});
    request
      .then(fetchData => {
        dispatch({ type: FETCHED, payload: fetchData.data})
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err })
      })
  }
}

export const post_smurfs = (smurf) => {
  const post = axios.post('http://localhost:3333/smurfs', smurf);
  return dispatch => {
    dispatch({ type: POSTING });
    post
      .then(postData => {
        dispatch({ type: POSTED, payload: postData.data })
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err })
      })
  }
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
