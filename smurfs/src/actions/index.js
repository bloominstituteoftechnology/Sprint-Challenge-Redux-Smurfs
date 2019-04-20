
import axios from 'axios';

import { FETCH_SMURFS, ADD_SMURF } from './types';

export const fetchSmurfs = () => async dispatch => {
  const res = await axios.get('http://localhost:3333/smurfs');
  dispatch({ type: FETCH_SMURFS, payload: res.data });
};

// export const addSmurf = smurf => async dispatch => {
//   const res = await axios.post('http://localhost:3333/smurfs', smurf);
//   dispatch({ type: ADD_SMURF, payload: res.data });
// };

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
