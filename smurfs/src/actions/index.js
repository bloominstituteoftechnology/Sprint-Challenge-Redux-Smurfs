import axios from 'axios';

export const GETTING_SMURFS = 'GETTING_SMURFS';
export const GET_SMURF_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURF_FAILURE = 'GET_SMURF_FAILURE';

// not sure why this didn't work...try again later
//const ax = axios.create({
//baseUrl: 'http://localhost:3333/',
//});

//console.log('ax', ax.baseURL);
//
const url = 'http://localhost:3333';
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
export const getSmurfs = () => dispatch => {
  console.log('getting smurfs');
  dispatch({type: GETTING_SMURFS});
  axios
    .get(`${url}/smurfs/`)
    .then(res => {
      console.log('then', res);
      dispatch({type: GET_SMURF_SUCCESS, payload: res.data});
    })
    .catch(err => {
      dispatch: ({type: GET_SMURF_FAILURE, payload: err});
    });
};
