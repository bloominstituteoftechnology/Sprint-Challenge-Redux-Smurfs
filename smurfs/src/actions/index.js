import axios from 'axios';
export const FETCHINGSMURF = 'FETCHINGSMURF';
export const FETCHSMURF = 'FETCHSMURF';
export const ERROR = 'ERROR';
export const ADDSMURF = 'ADDSMURF';
export const ADDINGSMURF = 'ADDINGSMURF';


export const getSmurfs = () => (dispatch) => {
  dispatch({type:FETCHINGSMURF})
  
  axios
  .get('http://localhost:3333/smurfs')
  .then(response => {
    dispatch({type:FETCHSMURF,smurfs:response.data })
  })
  .catch (err => {
    dispatch({type:ERROR, errorMessage:'Error reading the data'})
  });
}

export const addSmurfs = (smurf) = (dispatch) =>{
  dispatch({type:ADDINGSMURF});

  axios 
  .post(`http://localhost:3333/smurfs`, smurf)
  .then (request => {
    dispatch({type:ADDSMURF, smurfs:request.data})
  })
  .catch(err=> {
    dispatch({type:ERROR, errorMessage:'Error adding data'})
  });
}

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
