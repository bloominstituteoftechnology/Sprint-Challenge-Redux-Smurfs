import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED  = 'FETCHED';
export const ADDING = 'ADDING';
export const ADDED = 'ADDED';
export const UPDATING = 'UPDATING';
export const UPDATED = 'UPDATED';
export const DELETING = 'DELETING';
export const DELETED = 'DELETED';
export const ERROR = 'ERROR';

export const fetchSmurfs = () => dispatch => {
  dispatch({type: FETCHING})

  axios
    .get('http://localhost:3333/smurfs')
      .then(response => {
        dispatch({type: FETCHED, smurfs: response.data});
      })
      .catch(error => {
        dispatch({type: ERROR, error});
      })
};

export const addSmurf = smurf => dispatch => {
  dispatch({type: ADDING})

  axios
    .post('http://localhost:3333/smurfs', smurf)
      .then(response => {
        dispatch({type: FETCHED, smurfs: response.data});
      })
      .catch(error => {
        dispatch({type: ERROR, error});
      })
}

export const deleteSmurf = smurf => dispatch => {
  dispatch({type:DELETING});

  axios
    .delete(`http://localhost:3333/smurfs/${smurf.id}`)
      .then(response => {
        dispatch({type: DELETED});
      })
      .catch(error => {
        dispatch({type: ERROR, error});
      })


}


