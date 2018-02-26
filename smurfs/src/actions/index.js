import axios from 'axios';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const ADDING_SMURF = 'ADDING_SMURF';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
export const EDITED_SMURF = 'EDITED_SMURF';
export const EDIT_TOGGLE = 'EDIT_TOGGLE';
export const DELETE_SMURF = 'DELETE_SMURF';

export const fetchSmurfs = () => {
  const request = axios.get('http://localhost:3333/smurfs');

  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    // after the data is fetched
    // set time out to simulates a longer delay on api request
    setTimeout(()=>{
       request
      .then((res) => {
        // dispatch action
        dispatch({ type: FETCHED_SMURFS, payload: res.data });
      })
      .catch((err) => {
        console.log('ERROR!', err);
      });
    }, 2000); 
  };
};

export const addSmurf = (smurf) => {

  const request = axios.post('http://localhost:3333/smurfs', smurf);

  return dispatch => {
    dispatch({ type: ADDING_SMURF });
    // after the data is fetched
     request
    .then((res) => {
      // dispatch action
      dispatch({ type: FETCHED_SMURFS, payload: res.data });
    })
    .catch((err) => {
      console.log('ERROR!', err);
    });
  };
};

export const editToggle = (id)=>{
  return {
    type: EDIT_TOGGLE,
    payload: id
  }
}

export const editSmurf = (smurf) => {
  const request = axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf);

  return dispatch => {
    // dispatch({ type: EDITING_SMURF });
    // after the data is fetched
    request
    .then((res) => { 
      // dispatch action
      dispatch({ type: EDITED_SMURF, payload: res.data });
    })
    .catch((err) => {
      console.log('ERROR!', err);
    });
  };
};

export const deleteSmurf = (id) => {
  const request = axios.delete(`http://localhost:3333/smurfs/${id}`);

  return dispatch => {
    // dispatch({ type: DELETING_SMURF });
    // after the data is fetched
    request
    .then((res) => {
      // dispatch action
      dispatch({ type: DELETE_SMURF, payload: res.data.SmurfRemoved.id });
    })
    .catch((err) => {
      console.log('ERROR!', err);
    });
  };
};
