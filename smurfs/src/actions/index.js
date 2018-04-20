/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

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

import axios from 'axios';

export const FETCHINGSMURFS = 'FETCHING_SMURFS';
export const SMURFSFETCHED = 'SMURFSFETCHED';
export const ADDINGSMURF = 'ADDINGSMURF';
export const SMURFADDED = 'SMURFADDED';
export const UPDATINGSMURF = 'UPDATINGSMURF';
export const DELETINGSMURF = 'DELETINGSMURF';
export const ERROR = 'ERROR';

const URL = 'http://localhost:3333/smurfs'

