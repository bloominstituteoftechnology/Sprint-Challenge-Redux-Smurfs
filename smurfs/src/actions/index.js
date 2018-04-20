import axios from 'axios';
/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const GETTING = 'GETTING';
export const GOT = 'GOT';
export const ADDING = 'ADDING';
export const ADDED = 'ADDED';
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


export const getSmurfs = () => (dispatch) => {
    dispatch({ type: GETTING });

    axios.get('http://localhost:3333/smurfs')
      .then((response) => {
        dispatch({ type: GOT, smurfs: response.data })
      })
      .catch((error) => {
        dispatch({ type: ERROR, errorMessage: error.response.data.Error })
      });
  };

  export const addSmurf = (name, age, height) => (dispatch) => {
    dispatch({ type: ADDING });

    axios.post('http://localhost:3333/smurfs', {name, age, height})
      .then((response) => {
        dispatch({ type: ADDED, smurfs: response.data })
      })
      .catch((error) => {
        console.log(error)
        dispatch({ type: ERROR, errorMessage: error.response.data.Error })
      });
  };
