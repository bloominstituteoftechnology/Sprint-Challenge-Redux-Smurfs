export const FETCHING = 'FETCHING'
export const ADDING = 'ADDING'
export const UPDATING = 'UPDATING'
export const DELETING = 'DELETING'
export const FAILURE = 'FAILURE'
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const fetching = (smurfs) => {
 return {type: FETCHING, payload: smurfs}
}

export const adding = (smurf) => {
 return {type: ADDING, payload: smurf}
}

export const updating = (id) => {
 return {type: UPDATING, payload: id}
}

export const deleting = (id) => {
 return {type: DELETING, payload: id}
}

export const failure = () => {
 return {type: FAILURE, payload: 'Smurfs not found'}
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
