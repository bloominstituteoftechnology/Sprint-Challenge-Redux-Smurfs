import axios from 'axios';
const URL = 'http://localhost:3333/smurfs';

export const FETCHING_SMURFS = 'FETCHING_ SMURFS';
export const SUCCESS_FETCHING = 'SUCCESS_FETCHING';
export const SUCCESS_CREATING = 'SUCCESS_CREATING';
export const CREATING_SMURF = 'CREATING_SMURF';
export const DELETING_SMURF = 'DELETING_SMURF';
export const REJECTED = 'REJECTED';


export const fetchSmurfs = () => {
  const promise = axios.get(URL);
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    promise
      .then(response => {
        dipatch({ type: SUCCESS_FETCHING, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: REJECTED, payload: 'Error fetching smurfs...'});
      });
  };
};

export const addSmurfs = smurf => {
  const promise = axios.post(URL, smurf);
  return dispatch => {
    dispatch({ type: CREATING_SMURF });
    promise
      .then(response => {
        console.log('RESPONSE', response);
        dipatch({ type: SUCCESS_CREATING, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: REJECTED, payload: 'Error creating smurf...'});
      });
  };
};

export const deleteSmurf = smurfId => {
  const promise = axios.delete(`${URL}/${smurfId}`);
  return dispatch => {
    dispatch({ type: DELETING_SMURF });
    promise
      .then(response => {
        dipatch(fetchSmurfs());
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: REJECTED, payload: 'Error deleting smurf...'});
      });
  };
};



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
