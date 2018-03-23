import axios from 'axios';

export const 
  GET_SMURFS = "GET_SMURFS",
  GETTING_SMURFS = "GETTING_SMURFS",
  CREATE_SMURF = "CREATE_SMURFS",
  CREATING_SMURF = "CREATING_SMURF",
  SMURF_CREATED = "SMURF_CREATED",
  UPDATE_SMURF = "UPDATE_SMURF",
  UPDATING_SMURF = "UPDATING_SMURF",
  DELETE_SMURF = "DELETE_SMURF",
  DELETING_SMURF = "DELETING_SMURF",
  ERROR = "ERROR";


  
  
  export const getSmurfs = () => (dispatch) => {
    dispatch({ type: GETTING_SMURFS });
    
    axios
    .get(`http://localhost:3333/smurfs`)
    .then(response => {
      dispatch({ type: GET_SMURFS, smurfs: response.data })
    })
    .catch(error => {
      dispatch({ type: ERROR, errMsg: 'could not fetch smurfs' });
    });
    };
 
  
  export const createSmurf = (smurfs) => (dispatch) => {
    dispatch({ type: CREATE_SMURF });
    
    axios
    .post(`http://localhost:3333/smurfs`, smurfs )
    .then(response => {
      dispatch({ type: GET_SMURFS, smurfs: response.data });
    })
    .catch(error => {
      dispatch({ type: ERROR, errMsg: 'could not add smurf' });
    });
    };

  
