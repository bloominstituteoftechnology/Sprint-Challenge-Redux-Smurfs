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

export const FETCHINGSMURF ='FETCHINGSMURF';
export const SMURFSFETCHED ='SMURFSFETCHED';
export const ERRORFETCHINGSMURFS ='ERRORFETCHINGSMURFS';

const URL ='http://localhost:3333/smurfs';

export const getSmurfs = () => {
  const smurfs = axios.get(`${URL}`);
  return dispatch => {
    dispatch({type: FETCHINGSMURF});
    smurfs
      .then(({data}) => {
        dispatch({type: SMURFSFETCHED, payload: data});
      })
      .catch(error => {
        dispatch({type:ERRORFETCHINGSMURFS, payload:error});
      });
  };
};

export const ADDINGSMURF ='ADDINGSMURF';
export const SMURFADDED  ='SMURFADDED';
export const ERRORADDINGSMURF ='ERRORADDINGSMURF';

export const addSmurf = (smurf) => {
  const smurfs = axios.post(`${URL}`, {...smurf});
  return dispatch => {
    dispatch({type:ADDINGSMURF});
    smurfs
      .then(({data}) => {dispatch({type:SMURFADDED, payload:data});})
      .catch(error => {dispatch({type:ERRORADDINGSMURF, payload:error});});
  };
}; 