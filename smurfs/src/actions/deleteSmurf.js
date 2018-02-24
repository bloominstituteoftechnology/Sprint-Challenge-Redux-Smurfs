import axios from 'axios';

export const DELETING_SMURF = 'DELETING_SMURF';
export const SMURF_DELETED = 'SMURF_DELETED'; 
export const ERROR_DELETING_SMURF = 'ERROR_DELETING_SMURF';


export const deleteSmurf = id => {
  const deletingSmurf = axios.delete(`http://localhost:3333/smurfs/${id}`, { data: {id}});
  return dispatch => {
    dispatch({ type: DELETING_SMURF });
    deletingSmurf
      .then(({ data }) => {
        dispatch({ type: SMURF_DELETED, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR_DELETING_SMURF, payload: err });
      });
  };
};