import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';
export const GET_SMURFS = 'GET_SMURFS';

const target = 'http://localhost:3333';

export const addSmurf = smurf => dispatch => {
  axios
    .post (`${target}/smurfs`, smurf)
    .then (res => {
      dispatch({type:ADD_SMURF, payload:res.data})
    })
};

export const getSmurfs = () => dispatch => {
  axios 
    .get(`${target}/smurfs`)
    .then( res => { 
        dispatch({type:GET_SMURFS, payload:res.data})
      }
    );
};