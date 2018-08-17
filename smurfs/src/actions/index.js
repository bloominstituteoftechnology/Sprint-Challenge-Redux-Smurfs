import axios from 'axios';
export const FETCHING='FETCHING';
export const FETCHED='FETCHED';
export const ERROR='ERROR';
export const ADDING='ADDING';
export const ADDED='ADDED';
export const DELETING='DELETING';
export const DELETED='DELETED';
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
export const getSmurfs=()=>{
  const request=axios.get(`http://localhost:3333/smurfs`);
  return function (dispatch){
    dispatch({type:'FETCHING'});
    request.then(data=>{dispatch({type:'FETCHED',payload:data.data})}).catch(err=>dispatch({type:'ERROR'}));
  }
}
export const addSmurf=(newSmurfObj)=>{
  const request=axios.post('http://localhost:3333/smurfs',newSmurfObj);
  return function (dispatch){
    dispatch({type:'ADDING'});
    request.then(data=>{dispatch({type:'ADDED',payload:data.data})}).catch(err=>dispatch({type:'ERROR'}));
  }
}
export const deleteSmurf=(id)=>{
  const request=axios.delete(`http://localhost:3333/smurfs/${id}`);
  return function (dispatch) {
    dispatch({type:'DELETING'});
    request.then(data=>{dispatch({type:'DELETED',payload:data.data})}).catch(err=>dispatch({type:'ERROR'}));
  }
}