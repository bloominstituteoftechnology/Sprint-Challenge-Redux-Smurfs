import axios from 'axios';

export const FETCHING = 'FETECHING';
export const FETCHED = 'FETCHED';
export const ADD_SMURF = 'ADD_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const ERROR = 'ERROR';

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

const URL = 'http://localhost:3333/smurfs';

export const getSmurfs = () => {

   ;
    const smurfs = axios.get(URL);

    return dispatch => {
        dispatch({type:FETCHING});
        smurfs
            .then((response) => {
                console.log(response);
                dispatch({type: FETCHED, payload: response.data});
            })
            .catch((error) => {
                dispatch({type: ERROR, payload: error});
            })
    }
};