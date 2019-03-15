import axios from 'axios';
const target = 'http://localhost:3333';

export const ADDSMURF = 'ADDSMURF';
export const GETSMRUFS = 'GETSMURFS';
export const UPDATESMURF = 'UPDATESMURF';
export const DELETESMURF = 'DELETESMURF';

export const addSmurf = smurf => dispatch => {
  axios
    .post (`${target}/smurfs`, smurf)
    .then (res => {
      dispatch({type: ADDSMURF, smurfs: res.data})
    })
};

export const getSmurfs = smurf => dispatch => {

};

export const updateSmurf = smurf => dispatch => {

};

export const deleteSmurf = smurf => dispatch => {

};