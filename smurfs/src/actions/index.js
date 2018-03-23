import axios from 'axios';
export const GETTING = 'GETTING';
export const GOT = 'GOT';
export const ADDING = 'ADDING';
export const ADDED = 'ADDED';
export const UPDATING = 'UPDATING';
export const UPDATED = 'UPDATED';
export const DELETING = 'DELETING';
export const DELETED = 'DELETED';
export const ERROR = 'ERROR';

/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const getSmurfs = () => (dispatch) => {
  dispatch({ type: GETTING });

  axios.get('http://localhost:3333/smurfs')
    .then((response) => {
      dispatch({ type: GOT, smurfs: response.data })
    })
    .catch((error) => {
      dispatch({ type: ERROR, errorMessage: 'Error getting the data'})
    });
};

export const addSmurf = () => (dispatch) => {
  dispatch({ type: ADDING });

  axios.post('http://localhost:3333/smurfs')
    .then((response) => {
      dispatch({ type: ADDED, smurfs: response.data })
    })
    .catch((error) => {
      dispatch({ type: ERROR, errorMessage: 'Error adding the data'})
    });
};

export const updateSmurf = (id) => (dispatch) => {
  dispatch({ type: UPDATING });

  axios.put(`http://localhost:3333/smurfs/${id}`)
    .then((response) => {
      dispatch({ type: ADDED, smurfs: response.data })
    })
    .catch((error) => {
      dispatch({ type: ERROR, errorMessage: 'Error updating the data'})
    });
};

export const deleteSmurf = (id) => (dispatch) => {
  dispatch({ type: DELETING });

  axios.put(`http://localhost:3333/smurfs/${id}`)
    .then((response) => {
      dispatch({ type: DELETED, smurfs: response.data })
    })
    .catch((error) => {
      dispatch({ type: ERROR, errorMessage: 'Error deleting the data'})
    });
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
