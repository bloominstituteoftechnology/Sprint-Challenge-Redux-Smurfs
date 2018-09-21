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
export const FETCHING_DATA = 'FETCHING_DATA';
export const DATA_FETCHED = 'DATA_FETCHED';
export const FETCH_ERROR = 'FETCH_ERROR';
export const INITIALIZE_SMURF_ADD = 'INITIALIZE_SMURF_ADD';
export const COMPLETE_SMURF_ADD = 'COMPLETE_SMURF_ADD';
export const ADD_SMURF_ERROR = 'ADD_SMURF_ERROR';
export const DISPLAY_UPDATE_FORM = 'DISPLAY_UPDATE_FORM';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const UPDATED_SMURF = 'UPDATED_SMURF';
export const UPDATE_ERROR = 'UPDATE_ERROR';

export const fetchData = () => {
  return (dispatch) => {
    //Action that indicates data is being fetched
    dispatch({ type: FETCHING_DATA });
    axios
      .get('http://localhost:3333/smurfs')
      .then((response) => {
        //Action that indicates data has been fetched, and includes with it the response payload
        dispatch({ type: DATA_FETCHED, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: FETCH_ERROR });
      });
  };
};

export const addSmurf = (newSmurf) => {
  return (dispatch) => {
    //Again, action to indicate an API call is about to be made, this time for a POST
    dispatch({ type: INITIALIZE_SMURF_ADD });
    //Below, you're making the POST call to the API, with newFriend as the friend object youre adding. That newFriend object needs to follow the API framework for how objects look
    axios 
      .post('http://localhost:3333/smurfs', newSmurf)
      .then((response) => {
        //When POST is successful, the dispatch then sends an action (COMPLETE_FRIEND_ADD, and associated data, which in this case is the payload with response.data that includes the new friend added)
        dispatch({ type: COMPLETE_SMURF_ADD, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: ADD_FRIEND_ERROR });
      });
  };
};


//Smurf update stuff below:

// export const updateForm = (friend) => {
//   return (dispatch) => {
//     //Action indicates that it wants the update form displayed, and the associated data here is the friend obect you're about to update
//     dispatch({ type: DISPLAY_UPDATE_FORM, payload: friend });
//   };
// };

// export const updateFriend = (updatedFriend) => {
//   return (dispatch) => {
//     dispatch({ type: UPDATING_FRIEND });
//     axios.put('http://localhost:5000/api/friends');
//   };
// };