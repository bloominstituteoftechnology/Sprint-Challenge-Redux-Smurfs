import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ADDING = "ADDING";
export const ADDED = "ADDED";
export const UPDATING = "UPDATING";
export const UPDATED = "UPDATED";
export const DELETING = "DELETING";
export const DELETED = "DELETED";
export const ERROR = "ERROR";

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

export const getSmurfs = () => {
  const request = axios.get('http://localhost:3333/smurfs');

  return (dispatch) => {
    dispatch({
      type: FETCHING,
    })
    request.then(({data}) => {
      dispatch({ type: FETCHED, payload: data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err.message })
    });
  };
};

export const addSmurf = (newSmurf) => {
  const request = axios.post('http://localhost:3333/smurfs', newSmurf)

  return (dispatch) => {
    dispatch({
      type: ADDING
    })
    request.then(response => {
      dispatch({type: ADDED, payload: response.data})
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err.message})
    })
  }
}

export const deleteSmurf = (id) => {
  const request = axios.delete(`http://localhost:3333/smurfs/${id}`)

  return (dispatch) => {
    dispatch({type: DELETING})

    request.then(response => {
      dispatch({type: DELETED, payload: response.data})
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err.message})
    })
  }
}

