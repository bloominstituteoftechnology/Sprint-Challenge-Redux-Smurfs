import axios from "axios";

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const ADDING_SMURF = 'ADDING_SMURF';
export const SMURF_ADDED = 'SMURF_ADDED';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const DELETING_SMURF = 'DELETING_SMURF';
export const ERROR = 'ERROR';
export const SMURF_DELETED = 'SMURF_DELETED';
export const TOGGLE_UPDATE = 'TOGGLE_UPDATE';
export const SMURF_UPDATED = 'SMURF_UPDATED';


const url = 'http://localhost:3333/smurfs';

export const fetchStuff = () => {
  const promise = axios.get(url);
  return(dispatch) => {
    dispatch({ type: FETCHING_SMURFS })
    promise
      .then(response => {
        dispatch({
          type: SMURFS_FETCHED,
          payload: response.data
        })
      })
      .catch(err => {
        console.log(err);
        dispatch({ 
          type: ERROR,
          payload: err
         })
      });
  };
};

export const addSmurf = smurf => {
  const promise = axios.post(url, smurf);
  return(dispatch) => {
    dispatch({ type: ADDING_SMURF })
    promise
      .then(response => {
        dispatch({
          type: SMURF_ADDED,
          payload: response.data
        })
      })
      .catch(err => {
        console.log(err);
        dispatch({ 
          type: ERROR,
          payload: err
         })
      });
  };
};

export const deleteSmurf = id => {
  const promise = axios.delete(`${url}/${id}`);
  return(dispatch) => {
    dispatch({ type: DELETING_SMURF })
    promise
      .then(response => {
        dispatch({
          type: SMURF_DELETED,
          payload: response.data
        })
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: ERROR,
          payload: err
        })
      })
  }
}

export const updateSmurf = (id, smurf) => {
  const promise = axios.put(`${url}/${id}`, smurf )
  return(dispatch) => {
    dispatch({type: UPDATING_SMURF })
    promise
      .then(response => {
        dispatch({
          type: SMURF_UPDATED,
          payload: response.data
        })
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: ERROR,
          payload: err
        })
      })
  }
}

// export const toggleUpdate = id => {
//   return {
//     type: TOGGLE_UPDATE,
//     payload: id
//   }
// }
