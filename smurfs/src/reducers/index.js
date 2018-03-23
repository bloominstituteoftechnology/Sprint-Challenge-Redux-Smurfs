import { ADD_SMURF } from '../Actions';

const initState = [
  { name: 'bill', age: 5, height: 1 },
  { name: 'jill', age: 4, height: 2 }
];

export default (smurfs = initState, action) => {
  switch (action.type) {
    case ADD_SMURF:
      return [...smurfs,
        newSmurf];
    default:
      return smurfs;
  }
};

/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurfs: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
