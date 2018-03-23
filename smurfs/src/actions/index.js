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

export const   
  FETCHING    = 'FETCHING', 
  FETCHED     = 'FETCHED',
  ADDING      = 'ADDING',
  ADDED       = 'ADDED', 
  UPDATING    = 'UPDATING',
  UPDATED     = 'UPDATED', 
  DELETING    = 'DELETING',
  DELETED     = 'DELETED',    
  ERROR       = 'ERROR';

const ROOT_URL = `http://localhost:3333/smurfs`;

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING});

  axios
    .get(ROOT_URL)
    .then(response => {
        dispatch({ type: FETCHED, smurfs: response.data })
    })
    .catch(err => {
        dispatch({ type: ERROR, errorMessage: 'Smurfs Not Found' })
    });
};

export const addFriend = (newSmurf) => dispatch => {
  dispatch({ type: ADDING});

  axios  
    .post(ROOT_URL, newSmurf)
    .then(response => {
        dispatch({ type: ADDED, friends: response.data})
    })
    .catch(err => {
        dispatch({ type: ERROR, errorMessage: 'Smurf Not Added' })
    });
};