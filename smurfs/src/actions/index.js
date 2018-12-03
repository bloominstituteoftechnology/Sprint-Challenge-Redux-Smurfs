import axios from 'axios';
const target = 'http://localhost:3333';

export const ADD_SMURF = 'ADD_SMURF';
export const GET_SMRUFS = 'GET_SMURFS';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';

export const addSmurf = smurf => dispatch => {
  axios
    .post (`${target}/smurfs`, smurf)
    .then (res => {
      dispatch({type: ADD_SMURF, smurfs: res.data})
    })
};

export const getSmurfs = smurf => dispatch => {

};

export const updateSmurf = smurf => dispatch => {

};

export const deleteSmurf = smurf => dispatch => {

};