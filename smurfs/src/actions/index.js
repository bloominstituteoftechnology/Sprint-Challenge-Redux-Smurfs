/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';
export const GET_SMURFS = 'GET_SMURFS';
export const GETTING_SMURFS = 'GETTING_SMURFS';

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
export const addSmurf = (event, smurf) => {
 event.preventDefault();
 console.log('adding smurf');
 console.log('new smurf', smurf);
 const promise = axios.post(`http://localhost:3333/smurfs`, smurf)
 return function(dispatch) {
   promise
   .then(response=> {
     console.log(response);
     dispatch({type: GET_SMURFS, payload: response.data});
   })
   .catch(err=>{
     console.log(err);
   })
   
   getSmurfs();
 }

 }
  
 export const getSmurfs = () => {
  
  console.log('geting smurfs...');
  const getTheSmurfs = axios.get('http://localhost:3333/smurfs')
  return function(dispatch) {
  dispatch({type: GETTING_SMURFS});
  getTheSmurfs
  .then(response=> {
    console.log(response.data)
    dispatch({type: GET_SMURFS, payload: response.data});
  })
  


 }
  }

  export const deleteSmurf = (id) => {
    console.log('FINISH HIM!');
    const promise = axios.post(`http://localhost:3333/smurfs/${id}`)
    return function(dispatch) {

    }
    
  }
