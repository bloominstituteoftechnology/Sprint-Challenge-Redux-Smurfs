import axios from 'axios';

export const FETCH_SMURF = 'FETCH_SMURF';
export const SUCCESS_FETCH = 'SUCCESS_FETCH';
export const CREATING_SMURF = 'CREATING_SMURF';
export const SUCCESS_CREATING = 'SUCCESS_CREATING';
export const REJECTED = 'REJECTED';

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

export const fetchSmurfs = () => {
  const smurfDat = axios.get(URL);
  return dispatch => {
    dispatch({ type: FETCH_SMURF });
    smurfDat
      .then(response => {
        dispatch({ type: SUCCESS_FETCH, payload: [] });
      })
      .catch(err => {
        dispatch({ type: REJECTED, payload: 'Error fetching blue peeps...' });
      });
  };
};

export const addSmurf = smurf => {
  const smurfDat = axios.post(url, smurf);
  return dispatch => {
    dispatch({ type: CREATING_SMURF });
    smurfDat
      .then(response => {
        dispatch({ type: SUCCESS_CREATING, payload: [] });
      })
      .catch(err => {
        dispatch({ type: REJECTED, payload: 'Error creating blue peep...'});
      });
  };
};