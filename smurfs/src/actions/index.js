import axios from 'axios';
export const FETCHING='FETCHING';
export const FETCHED='FETCHED';
export const ERROR='ERROR';
export const ADDING='ADDING';
export const ADDED='ADDED';
export const DELETING='DELETING';
export const DELETED='DELETED';
export const UPDATING='UPDATING';
export const UPDATED='UPDATED';

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
export const updateSmurf=(id,updatedSmurfObj)=>{
  const request=axios.put(`http://localhost:3333/smurfs/${id}`,updatedSmurfObj);
  return function (dispatch) {
    dispatch({type:'UPDATING'});
    request.then(data=>{dispatch({type:'UPDATED',payload:data.data})}).catch(err=>dispatch({type:'ERROR'}));
  }
}