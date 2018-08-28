/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const PENDINGSMURFS = 'PENDINGSMURFS'
export const SUCCESSSMURFS = 'SUCCESSSMURFS'
export const ERRORSMURFS = 'ERRORSMURFS'


export const smurfsFetching = () => {
  const promise = axios.get('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({type: PENDINGSMURFS});
    promise.then(response => {
      console.log(response);
      dispatch({type: SUCCESSSMURFS, payload: response.data})
    })
    .catch(err => {
      dispatch({type: ERRORSMURFS, payload: 'Failed to fetch smurfs:('})
    })
  };
};

export const smurfsAdding = (data) => {
  console.log(data)
  const promise = axios.post('http://localhost:3333/smurfs', data);
  return dispatch => {
    dispatch({type: PENDINGSMURFS});
    promise.then(response => {
      console.log(response);
      dispatch({type: SUCCESSSMURFS, payload: response.data})
    })
    .catch(err => {
      dispatch({type: ERRORSMURFS, payload: 'Failed to add smurf:('})
    })
  };
};



//   For this project you'll need at least 2 action creators for the main portion,
//    and 2 more for the stretch problem.
//    Be sure to include action types for each type of action creator. Also, be sure to mind
//      the "pending" states like, fetching, creating, updating and deleting.
//    C - addSmurf
//    R - getSmurfs
//    U - updateSmurf
//    D - deleteSmurf
// */
