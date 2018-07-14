import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const ERROR = 'ERROR';
export const GET_SMURFS = 'GET_SMURFS';
export const GETTING_SMURFS = 'GETTING_SMURFS';
export const ADD_SMURFS = 'ADD_SMURFS';
export const ADDING_SMURFS = 'ADDING_SMURFS';
export const UPDATE_SMURFS = 'UPDATE_SMURFS';
export const UPDATING_SMURFS = 'UPDATING_SMURFS';
export const DELETE_SMURFS = 'DELETE_SMURFS';
export const DELETING_SMURFS = 'DELETEING_SMURFS';
export const SUCCESS = 'SUCCESS';

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

const URL = 'http://localhost:3333';

export const getSmurfs = () => {
  const smurfs = axios.get(`${URL}/smurfs`);
  return dispatch => {
    dispatch({ type: GETTING_SMURFS });
    smurfs
    .then(response => {
      console.log('RESPONSE: ', response);
      dispatch({ type: SUCCESS, payload: response.data});
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ERROR, payload: 'Error fetching Smurfs'});
    });
  };
};


export const addSmurfs = smurf => {
  const newSmurf = axios.post(`${URL}/smurfs`, smurf);
  return dispatch => {
    dispatch({ type: ADDING_SMURFS});
    newSmurf
    .then(response => {
      console.log('RESPONSE: ', response.data);
      dispatch({ type: SUCCESS, payload: response.data });
    })
    .catch(err=> {
      dispatch({ type: ERROR, payload: "Error adding smurf" });
    })
  };
};



// export const deleteSmurfs = id => {
//   const deleteSmurfs = axios.delete(`${URL}/smurfs/:id`, {data: {name}});
//   return dispatch => {
//     dispatch({ type: DELETING_SMURFS });
//     newSmurfs
//       .then(({ }))
//   }
// }