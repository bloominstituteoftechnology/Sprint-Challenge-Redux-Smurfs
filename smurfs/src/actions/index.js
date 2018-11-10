/* We need axios to get data from the api */
import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING = 'FETCHING';
export const UPDATING = 'UPDATING';
export const CREATING = 'CREATING';
export const DELETING = 'DELETING';
export const ERROR    = 'ERROR';

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

// Assigning all of these as empty functions for now, just to have them defined.

// GET the smurfs from the API data:
export const getSmurfs = () => {};

// POST to add a new smurf to the API:
export const addSmurf = () => {};

// Stretch - PUT to edit a smurf:
export const editSmurf = () => {};

// Stretch - DELETE to remove:
export const deleteSmurf = () => {};