/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';  // import axios to create an axios call 
import Smurf from '../components/Smurf';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SUCCESS = 'SUCCESS';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ERROR = 'ERROR';   

const URL = `http://localhost:3333/smurfs`;

// export const SMURFS_FETCHED = 'SMURFS_FETCHED'; 
// export const SMURF_ADDED = 'SMURF_ADDED'; 
// export const UPDATING_SMURF = 'UPDATING_SMURF';
// export const SMURF_UPDATED = 'SMURF_UPDATED';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs - done
   U - updateSmurf
   D - deleteSmurf
*/

export const fetchSmurfs = () => { // build an action type
  const getSmurfs = axios.get(URL);  // create an axios call 
  return dispatch => {    // dispatch method will be made available to us
    dispatch({ type: FETCHING_SMURFS });  // dispatch out fetching smurfs
    getSmurfs             // call getsmurfs
      .then(response => {   // response from server 
        dispatch({ type: SUCCESS, payload: response.data });  // set on state by dispatching a Success Type with payload of response.data 
      })
      .catch(err => {       // catch error
        dispatch({ type: ERROR, payload: 'Error Fetching Smurfs' }) // set on state by dispatching a Error Type with payload of error string
      });
  };
};

export const createSmurf = smurf => { // take in a smurf
  const addSmurf = axios.post(URL, smurf);  // which will be held in state and post the smurf 
  return dispatch => {  // call dispatch function
    dispatch({ type: ADDING_SMURF })  // dispatch action type adding smurf
    addSmurf
      .then(response => { // response 
        console.log(response.data); // console log response 
        dispatch({ type: SUCCESS, payload: response.data });  // dispatch a success 
      })
      .catch(err => { // catch error 
        dispatch({ type: ERROR, payload: `ERROR Adding Smurf` }); // dispatch error with error string 
      });
  };
};


//   const listSmurfs = axios.get('http://localhost:3333/smurfs');
//   return function(dispatch) {
//     dispatch ({ type: FETCHING_SMURFS });
//     listSmurfs
//       .then(someData => {
//         dispatch({ type: SMURFS_FETCHED, payload: someData.data });
//       })
//       .catch(err => {        
//         dispatch({ type: ERROR, payload: err }); 
//       });
//    };    
// };

// export const addSmurf = smurf => {
//   const newSmurf = axios.post('http://localhost:3333/addsmurf', smurf);
//   return function(dispatch) {
//     dispatch({ type: ADD_SMURF });
//     newSmurf
//       .then(response => {
//         dispatch({ type: SMURF_ADDED, payload: response.data });
//       })
//       .catch(err => {
//         dispatch({ type: ERROR, payload: err });
//       });
//   };
// };

// export const updateSmurf = (id, smurf) => {
//   const editSmurf = axios.put(`http://localhost:3333/smurfs/${id}`, smurf);
//   return function(dispatch) {
//     dispatch({ type: UPDATING_SMURF });
//     editSmurf
//       .then(response => {
//         dispatch({ type: SMURF_UPDATED, payload: response.data });
//       })
//       .catch(err => {
//         dispatch({ type: ERROR, payload: err });
//       });
//   };
// };