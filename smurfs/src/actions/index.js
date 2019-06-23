,

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

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

export const getSmurf = () => dispatch => {
dispatch({ type: FETCH_SMURF_START});
axios.get('http://localhost:3333/smurfs')
.then(res => 
  dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data.results }))
.catch(err => console.log(err.response);
dispatch({ type: FETCH_SMURF_FAILURE, payload: `${err.response.status} ${err.response.data}` }));
}