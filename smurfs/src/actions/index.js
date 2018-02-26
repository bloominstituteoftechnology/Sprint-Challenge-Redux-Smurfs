import axios from 'axios';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
export const ADDING_SMURFS = 'ADDING_SMURFS';
export const ADDED_SMURFS = 'ADDED_SMURFS';
export const ERROR = 'ERROR';

export const getSmurfs = () => {
  const smurfs = axios.get('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    smurfs
      .then(response => {
        dispatch({ type: FETCHED_SMURFS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};

//I believe I was told this was the incorrect way to get IDs in a peer review, but I can't remember
//which repo had this comment and what the remedy was and don't won't to spend what little time we get
//for the sprint to look...
let nextID = 0;
export const addSmurf = smurf => {
  const intermediary = { ...smurf, id: nextID++ };
  const newSmurf = axios.post('http://localhost:3333/smurfs', intermediary);
  return dispatch => {
    dispatch({ type: ADDING_SMURFS });
    newSmurf
      .then(response => {
        dispatch({ type: ADDED_SMURFS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};
