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

export const RECEIVE_DATA = 'RECEIVE_DATA'

function receiveData (smurfs) {
  return {
    type: RECEIVE_DATA,
    smurfs,
  }
}

export function handleInitialData () {
  return (dispatch) => {
    return Promise.all([
      axios
      .get('http://localhost:3333/api/smurfs')
    ]).then((data) => {
        dispatch(receiveData(data))
      })
  }
}


// export default () => dispatch => {
//   dispatch({ type: SHOW_LOADING });
//   axios
//     .get('http://localhost:5000/api/friends')
//     .then(({ data }) => {
//       dispatch({ type: HIDE_LOADING });
//       dispatch({
//         type: FETCH_FRIENDS_SUCCESS,
//         friends: data,
//       });
//     })
//     .catch(err => {
//       // update the store setting the error
//       dispatch({ type: HIDE_LOADING });
//       dispatch({ type: FETCH_FRIENDS_ERROR });
//     });
// };