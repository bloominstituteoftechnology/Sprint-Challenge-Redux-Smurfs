import axios from 'axios';
export const FETCH = 'FETCH';
export const FETCHED = 'FETCHED';
export const ADDING = 'ADDING';
export const ADDED = 'ADDED';
export const ERROR = 'ERROR';
export const REMOVED = 'REMOVED';

export const get = () => {
  return dispatch => {
    dispatch({ type: FETCH });
    axios
      .get('http://localhost:3333/smurfs')

      .then(response => {
        dispatch({ type: FETCHED, payload: response.data });
      })

      .catch(error => {
        console.log(error);
        dispatch({ type: ERROR });
      });
  };
};

export const add = smurf => {
  return dispatch => {
    dispatch({ type: ADDING });
    axios
      .post('http://localhost:3333/smurfs', smurf)

      .then(
        response =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve(dispatch({ type: ADDED, payload: response.data }));
            }, 1000);
          })
      )

      .catch(error => {
        console.log(error);
        dispatch({ type: ERROR });
      });
  };
};

export const removeSmurf = id => {
  return dispatch => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)

      .then(response => {
        dispatch({ type: REMOVED, payload: response.data });
      })

      .catch(error => {
        console.log(error);
        dispatch({ type: ERROR });
      });
  };
};
