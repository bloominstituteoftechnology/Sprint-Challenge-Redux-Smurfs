import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ADDING = 'ADDING';
export const UPDATING = 'UPDATING';
export const DELETING = 'DELETING';
export const ERROR = 'ERROR';

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
export default function smurfsAction(){
  return dispatch =>{
    dispatch({type: FETCHING})
      axios
        .get('http://localhost:3333/smurfs')
        .then(response =>{
          console.log(response);
          dispatch({type:FETCHED,
            payload: response.data})
        })
        .catch(error =>{
          dispatch({
            type: ERROR,
            payload: error
          })
          console.log(error)
        })
  }
}

export const createSmurf = smurf =>{
  return dispatch =>{
    dispatch({type:ADDING})
      axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(response =>{
          console.log(response);
        })
  }
}