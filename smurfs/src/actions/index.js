import axios from 'axios';

export const FETCHING_DATA = 'FETCHING_DATA';
export const DATA_FETCHED = 'DATA_FETCHED';
export const FETCHING_ERROR = 'FETCHING_ERROR';

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
export const fetchData = (URL) => {
  const request = axios.get(URL);
  return (dispatch) => {
    dispatch({type: FETCHING_DATA});
    
    request.then(res => {
      dispatch({
        type: DATA_FETCHED,
        payload: res.data 
      })
    });
  }
}
