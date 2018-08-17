import axios from 'axios';

// 1. Fetching
export const FETCHING = 'FETCHING';
export const IS_FETCHED = 'IS_FETCHED';

export const fetchSmurf = () => {
  const request = axios.get('http://localhost:3333/smurfs');

  return (dispatch) => {
    dispatch({ type: FETCHING });
    request.then(data => data.data)
            .then(data => dispatch({ type: IS_FETCHED, smurfs: data }))
            .catch(error => dispatch({ type: ERROR, error }));
  }
}

// 2. Adding 
export const ADDING = 'ADDING';
export const IS_ADDED = 'IS_ADDED';

export const addSmurf = (smurf) => {
  const request = axios.post('http://localhost:3333/smurfs', smurf);

  return (dispatch) => {
    dispatch({ type: ADDING });
    request.then(data => data.data)
            .then(data => dispatch({ type: IS_ADDED, smurfs: data }))
            .catch(error => dispatch({ type: ERROR, error }));
  }
}

// 3. Deleting
export const DELETING = 'DELETING';
export const IS_DELETED = 'IS_DELETED';

export const deleteSmurf = (id) => {
  const request = axios.delete(`http://localhost:3333/smurfs/${id}`);

  return (dispatch) => {
    dispatch({ type: DELETING });
    request.then(data => data.data)
            .then(data => dispatch({ type: IS_DELETED, smurfs: data }))
            .catch(error => dispatch({ type: ERROR, error }));
  }
}

// 4. Updating
export const UPDATING = 'UPDATING';
export const IS_UPDATED = 'IS_UPDATED';

export const updateSmurf = (id, friend) => {
  const request = axios.put(`http://localhost:3333/smurfs/${id}`, friend);

  return (dispatch) => {
    dispatch({ type: UPDATING });
    request.then(data => data.data)
            .then(data => dispatch({ type: IS_UPDATED, smurfs: data }))
            .catch(error => dispatch({ type: ERROR, error }));
  }
}

// 5. Error
export const ERROR = 'ERROR';