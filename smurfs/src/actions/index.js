/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
  */
  import axios from 'axios';
  export const FETCHING_SMURFS = "FETCHING_SMURFS";
  export const FETCHED_SMURFS = "FETCHED_SMURFS";
  export let ERROR = "ERROR";
  export const ADD_SMURF ="ADD_SMURF";


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

export function addSmurf (test) {
  console.log(test);
  return {type:ADD_SMURF, payload: test }
}
export function retriveSmurf (test) {
  console.log(test);
  return {type:FETCHING_SMURFS, payload: test }
}
// export function addSmurf (test) {
//   console.log(test);
// }
