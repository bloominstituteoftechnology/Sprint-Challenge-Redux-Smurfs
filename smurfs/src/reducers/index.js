/*
  Be sure to import in all of the action types from `../actions`
  or use some strings... that's an option too...
  if const STRING= 'STRING', then I'd rather just type out 'STRING'
  then import such a silly const. Personal prefrance.
*/

const initial = 
 {
   smurfs: [],
   fetchingSmurfs: false,
   fetchedSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 };

export const smurfReducer = (state=initial,action) => {
	switch(action.type){
	case 'GETTING_SMURFS':
	return {
	...state, fetchingSmurfs:true
	};
	case 'GOT_SMURFS':
	return {
	...state, fetchingSmurfs:false,fetchedSmurfs:true, smurfs:action.payload
	};
	case 'ADDING_SMURF':
	return {
	...state, addingSmurf: true
	};
	case 'ADDED_SMURF':
	return {
	...state, addingSmurf: false, smurfs:[...state.smurfs,action.payload]
	};
	default:
		return state;
	}
};