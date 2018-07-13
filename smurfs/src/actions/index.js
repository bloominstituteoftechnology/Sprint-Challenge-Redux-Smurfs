 import axios from 'axios';

 export const FETCHING = 'FETCHING';
 export const FETCHED = 'FETCHED';
 export const SAVING = 'SAVING';
 export const SAVED = 'SAVED';
 export const ERROR = 'ERROR';
 export const UPDATING = 'UPDATING';
 export const UPDATED = 'UPDATED';
 export const DELETING = 'DELETING';
 export const DELETED = 'DELETED';

 const URL = 'http://localhost:3333/smurfs'

 export const fetchData = () => {
   const request = axios.get(URL);
   return (dispatch) => {
     dispatch({type: FETCHING});
     request.then(response => {
       dispatch({type: FETCHED, payload: response.data})
     }).catch(err => {
       dispatch({type: ERROR, payload: err})
     })
   }
 };

 export const saveData = smurf => {
   const request = axios.post(URL, smurf);
   return (dispatch) => {
     dispatch({type: SAVING});
     request.then(response => {
       dispatch({type: SAVED, payload: response.data})
     }).catch(err => {
       dispatch({type: ERROR, payload: err})
     })
   }
 }
