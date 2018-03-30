import axios from 'axios';

export const   
  FETCHING    = 'FETCHING', 
  FETCHED     = 'FETCHED',
  ADDING      = 'ADDING',
  ADDED       = 'ADDED', 
  UPDATING    = 'UPDATING',
  UPDATED     = 'UPDATED', 
  DELETING    = 'DELETING',
  DELETED     = 'DELETED',    
  ERROR       = 'ERROR';

const ROOT_URL = `http://localhost:3333/smurfs`;

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING});

  axios
    .get(ROOT_URL)
    .then(response => {
        dispatch({ type: FETCHED, smurfs: response.data })
    })
    .catch(err => {
        dispatch({ type: ERROR, errorMessage: 'Not found' })
    });
};

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: ADDING});
  
  axios  
    .post(ROOT_URL, newSmurf )
    .then(response => {
        dispatch({ type: ADDED, smurfs: response.data})
    })
    .catch(err => {
        dispatch({ type: ERROR, errorMessage: 'Not added' })
    });
};