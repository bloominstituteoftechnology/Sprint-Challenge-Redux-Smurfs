import * as types from './types';
import axios from 'axios';

const smurfAPI = 'http://localhost:3333/smurfs';

function addSmurfs(smurfs) {
  return {
    type: types.FETCH_SUCCESS,
    payload: smurfs
  };
}

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: types.FETCH_SMURFS });
  axios.get(smurfAPI)  
  .then (res => {
    console.log(res);
    // dispatch({
    //   type: types.FETCH_SUCCESS,
    //   payload: res.data,
    // });
      dispatch(addSmurfs(res.data));
  })
  .catch(() => {
    dispatch({
      type: types.FETCH_FAIL,
      payload: true,
    });
  });
  // .finally(() => {
  //   dispatch({
  //     isFetching: false
  //   })
  // });
}



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

