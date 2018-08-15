import axios from 'axios';

export const FETCH_SMURF = 'FETCH_SMURF';
export const SUCCESS_FETCH = 'SUCCESS_FETCH';
export const CREATING_SMURF = 'CREATING_SMURF';
export const SUCCESS_CREATING = 'SUCCESS_CREATING';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const SUCCESS_UPDATING = 'SUCCESS_UPDATING';
export const DELETING_SMURF = 'DELETING_SMURF';
export const SUCCESS_DELETING = 'SUCCESS_DELETING';
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

export const addSmurf = smurf => {
  const smurfDat = axios.post('http://localhost:3333/smurfs', smurf);
  return dispatch => {
    dispatch({ type: CREATING_SMURF });
    smurfDat
      .then(response => {
        dispatch({ type: SUCCESS_CREATING, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: REJECTED, payload: 'Error creating blue peep...'});
      });
  };
};

export const fetchSmurfs = () => {
  const smurfDat = axios.get('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({ type: FETCH_SMURF });
    smurfDat
      .then(response => {
        dispatch({ type: SUCCESS_FETCH, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: REJECTED, payload: 'Error fetching blue peeps...' });
      });
  };
};

export const updateSmurf = smurfId => {
  const smurfDat = axios.put('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({ type: UPDATE_SMURF });
    smurfDat
      .then(response => {
        dispatch({ type: SUCCESS_UPDATING, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: REJECTED, payload: 'Error fetching blue peeps...' });
      });
  };
};

export const deleteSmurf = smurfId => {
  const smurfDat = axios.delete(`${'http://localhost:3333/smurfs'}/${smurfId}`);
  return dispatch => {
    dispatch({ type: DELETING_SMURF });
    smurfDat
      .then(response => {
        dispatch({ type: SUCCESS_DELETING, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: REJECTED, payload: 'Error deleting blue peep...' });
      });
  };
};