import axios from 'axios';

export const RECEIVING_SMURFS = 'RECEIVING_SMURFS';
export const RECEIVED_SMURFS = 'RECEIVED_SMURFS';
export const ERROR_RECEIVING = 'ERROR_RECEIVING';

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
  const monkeys = axios.get('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch ({type: RECEIVING_SMURFS});
    monkeys
      .then(( { data }) => {
        dispatch({ type: RECEIVED_SMURFS, payload: data });
        console.log(data);
      })
      .catch(err => {
        dispatch({ type: ERROR_RECEIVING, payload: err})
        console.log('there was an error', err)
      })
  }
}
