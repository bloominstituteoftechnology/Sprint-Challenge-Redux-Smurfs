import { combineReducers } from "redux";

/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const dummyData = [
  {
    id: 0,
    name: 'Brainey',
    age: 200,
    height: '5cm'
  },
  {
    id: 1,
    name: 'Papa',
    age: 400,
    height: '8cm'
  }
]

const initalState = {
  smurfs: dummyData,
  fetchingSmurfs: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
const smurfReducer = (state = initalState, action) => {

  switch (action.type) {

    default:
      return state;
  }
}

export default combineReducers({
  smurfReducer
})