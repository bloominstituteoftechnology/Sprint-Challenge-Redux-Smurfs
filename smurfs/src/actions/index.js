export const FETCHING = 'FETCHING';
export const GET_SMURFS = 'GET_SMURFS';
export const ERR = 'ERR';



/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const getSmurfs = () => {
  const promise = axios.get('http://localhost:3333/smurfs')
  return dispatch => {
    dispatch({type: FETCHING})
    promise
    .then(response => {
      console.log('RESPONSE', response)
      dispatch({type: GET_SMURFS, payload: response.data})
    })
    .catch(err => {
      dispatch({type: ERR, payload: err})
    })
  }
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




/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/