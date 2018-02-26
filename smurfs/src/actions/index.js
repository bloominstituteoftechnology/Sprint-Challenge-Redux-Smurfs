/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';
export const IS_FETCHING = 'IS_FETCHING';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const ERROR = 'ERROR';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADD_SMURF = 'ADD_SMURF';
export const DELETING_SMURF = 'DELETING_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const THIS_SMURF = 'THIS_SMURF';
export const TOGGLE_EDIT_SMURF = 'TOGGLE_EDIT_SMURF';
export const EDIT_SMURF = 'EDIT_SMURF';
export const EDITING_SMURF = 'EDITING_SMURF';

const URL = 'http://localhost:3333/smurfs'

export const getSmurfs = () => {
    const smurfs = axios.get(`${URL}`); 
       return dispatch => {
           dispatch({ type: IS_FETCHING });
           smurfs
             .then(({data}) => {
                 dispatch({ type: SMURFS_FETCHED, payload: data });
                })
             .catch(err => {
                dispatch({ type: ERROR, payload: err });
        });
    };   
}; 
export const addSmurf = smurf => {
  const newSmurf = axios.post(`${URL}`, smurf);
  return dispatch => {
    dispatch({ type: ADDING_SMURF });
    newSmurf
      .then(({ data }) => {
        dispatch({ type: ADD_SMURF, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
export const deleteSmurf = (id) => {
  const newSmurf = axios.delete(`${URL}/${id}/`, id);
  return dispatch => {
    dispatch({ type: DELETING_SMURF });
    newSmurf
      .then(({ data }) => {
        dispatch({ type: DELETE_SMURF, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
export const editSmurf = (id) => {
  const editedSmurf = axios.put(`${URL}/${id}/`, id);
  return dispatch => {
    dispatch({ type: EDITING_SMURF });
    editedSmurf
      .then(({data}) => {
        dispatch({ type: EDIT_SMURF, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  }
}
export const toggleShowEdit = () => {
  return {
    type: TOGGLE_EDIT_SMURF
  };
};
export const updateThisSmurf = smurf => {
  return {
    type: THIS_SMURF,
    payload: smurf
  };
};

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
