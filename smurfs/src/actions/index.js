/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios";

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const GETTING_SMURFS = "GETTING_SMURFS;"
export const ADDING = "ADDING";
export const ADDING_SMURFS = "ADDING_SMURFS";
export const FAILURE = "FAILURE";

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

export const fetchSmurfs = () => ( dispatch ) =>
{
  dispatch( { type: FETCHING_SMURFS } );
  axios
    .get( "http://localhost:3333/smurfs" )
    .then( ( r ) => dispatch( { type: GETTING_SMURFS, payload: r.data } ) )
    .catch( ( error ) => dispatch( { type: FAILURE, payload: error } ) );
}

export const addSmurf = ( smurf ) => ( dispatch ) =>
{
  dispatch( { type: ADDING } );
  axios
    .post( "http://localhost:3333/smurfs", smurf )
    .then( ( r ) => dispatch( { type: ADDING_SMURFS, payload: r.data } ) )
    .catch( ( error ) => dispatch( { type: FAILURE, payload: error  } ) ); 
}