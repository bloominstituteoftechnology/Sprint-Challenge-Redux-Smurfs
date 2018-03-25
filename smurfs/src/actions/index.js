import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const GETTING = 'GETTING';
export const ADDING = 'ADDING';
export const ERROR= 'ERROR';
export const ADD = 'ADD';
export const REQUEST = 'REQUEST';
export const RECEIVE = 'RECEIVE';

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

function adding(){
  return {
    type:ADDING
  }
}
function getting(){
  return {
    type:GETTING
  }
}
function receive(){
  return {
    type:RECEIVE
  }
}

function error(e){
  return {
    type:ERROR,
    data:e
  }
}

export const add = (n,a,h)=>{
  return {
    type:ADD,
    name:n,
    age:a,
    height:h,
  }
}

export function getSmurfs(){
  return function(dispatch){
    dispatch(getting());
    return fetch('http://localhost:3333/smurfs')
    .then( res=>{
      dispatch(receive());
      axios.get('http://localhost:3333/smurfs')
      .then( res=>{
        res.data.forEach( (e)=>{
          dispatch(add(e.name,e.age,e.height));
        });
      })
      .catch( err=>{
        dispatch(error(err));
      });
    })
    .catch( err=>{
      dispatch(error(err));
    });
  
  }
}


export function addSmurf(n='',a='',h=''){
  return function(dispatch){
    if(n === ''){
    }
    else{
      dispatch(adding());
      return fetch('http://localhost:3333/smurfs')
      .then( res=>{
        dispatch(receive());
        axios.post('http://localhost:3333/smurfs',{
          name:n,
          age:a,
          height:h
        })
        .catch( err=>{
          dispatch(error(err));
        });
      })
      .catch( err=>{
        dispatch(error(err));
      });
    }
  }
}


