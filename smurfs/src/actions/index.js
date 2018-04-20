/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const SMURFING = 'SMURFING';
export const SMURFED = 'SMURFED';
export const SMURFINGANEWONE = 'SMURFINGANEWONE'
export const ANEWONESMURFED = 'ANEWONESMURFED'
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

export const initSmurf = () => dispatch => {
  dispatch({ type: SMURFING});

    axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({ type: SMURFED, smurfs: response.data});
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: 'Weve been smurfed!'})
    });
  

}

export const addSmurf = (smurf) => dispatch => {
  dispatch({ type: SMURFINGANEWONE });

    axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(request => {
      dispatch({ type: ANEWONESMURFED, smurfs: request.data})
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: 'Error adding friend'})
    })
}