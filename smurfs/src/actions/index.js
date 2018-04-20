import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const FETCHING_ERROR = 'FETCHING_ERROR';

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

export const getSmurfs = () => {
  const fetchSmurf = axios.get ('http://localhost:3333/smurfs');
  return (
    getSmurfs.then (
      response => {
        console.log(response);
        return {
          type: FETCHED,
          payload: response.data
        }
      }
    ) .catch (
      err => {
        return {
          type: FETCHING_ERROR,
          payload: err
        }
      }
    )
  )
}