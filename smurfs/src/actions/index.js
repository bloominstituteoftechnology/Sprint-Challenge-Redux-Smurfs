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

export const FETCHING = 'FETCHING'
export const ERROR = 'ERROR'
export const FETCHED = 'FETCHED'
export const CAPTURING = 'CAPTURING'
export const MORPHING = 'MORPHING'
export const CRUSH = 'CRUSH'

export const fetchSmurfs = () => {
  const promise = axios.get('http://localhost:3333/smurfs');

  return dispatch => {
    dispatch({ type: FETCHING });

    promise
      .then(response => {
        dispatch({ type: FETCHED, payload: response.data });
      })

      .catch(err => {
        dispatch({ type: ERROR, payload: 'Error occured while fetching' });
      });
  };
};

export const captureSmurfs = smurf => {
  const promise = axios.post('http://localhost:3333/smurfs', smurf);
  return dispatch => {
    dispatch ({ type: CAPTURING });
    promise
      .then(response => {
        dispatch(fetchSmurfs());
      })

      .catch(err => {
        dispatch({ type: ERROR, payload: 'Smurf could not be captured' });
      });
  };
};

export const morphSmurfs = (smurf, data) => {
  const promise = axios.put(`http://localhost:3333/smurfs/${smurf}`, data);
  return dispatch => {
    dispatch({ type: MORPHING });
    promise
      .then(reponse => {
        dispatch(fetchSmurfs());
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const crushSmurfs = smurf => {
  const promise = axios.delete(`http://localhost:3333/smurfs/${smurf}`);
  return dispatch => {
    dispatch({ type: CRUSH });
    promise
      .then(reponse => {
        dispatch(fetchSmurfs());
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};