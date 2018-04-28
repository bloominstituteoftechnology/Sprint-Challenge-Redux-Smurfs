import axios from 'axios';

/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const GET_SMURFS = 'GET_SMURFS';
export const POST_SMURFS = 'POST_SMURFS';
export const FETCHED = 'FETCHED';
export const FETCHING = 'FETCHING';
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

export const getSmurfs = () => {
  const request = axios.get('http://localhost:3333/smurfs');
  return (dispatch) => {
    dispatch({type: 'FETCHING'})
    request.then((response) => {
      dispatch({type: 'FETCHED', payload: response.data})
    }).catch((error) => {
      dispatch({type: ERROR, error: 'ERROR FETCHING DATA'})
    })
  }
}
