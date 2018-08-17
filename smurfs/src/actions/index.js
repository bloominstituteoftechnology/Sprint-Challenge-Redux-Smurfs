import axios from 'axios';

export const GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE';
const URL = 'http://localhost:3333/smurfs';

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET });
  axios.get(URL)
    .then(({ data }) => {
      dispatch({ type: SUCCESS, payload: data });
    })
    .catch(err => {
      dispatch({ type: FAILURE, payload: err });
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
