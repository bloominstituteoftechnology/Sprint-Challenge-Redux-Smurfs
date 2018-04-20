import {
	FETCHING_SMURFS,
	SMURFS_FETCHED,
	ERROR,
	SMURFS_SAVED,
	SAVING_SMURFS,
	UPDATING_SMURF,
	SMURF_UPDATED,
	DELETING_SMURF,
	SMURF_DELETED
} from '../actions';

const initialState = {
	fetchingSmurfs: false,
	smurfsFetched: false,

	smurfsSaved: false, 
	savingSmurfs: false, 

	updatingSmurf: false, 
	smurfUpdated: false, 

	deletingSmurf: false, 
	smurfDeleted: false, 

	smurfs: [],
	error: null
};
export const smurfsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING_SMURFS:
			return Object.assign({}, state, { fetchingSmurfs: true, error: null });
		case SMURFS_FETCHED:
			return Object.assign({}, state, {
				smurfs: [ ...state.smurfs, ...action.payload ],
				smurfsFetched: true,
				fetchingSmurfs: false,
				error: null
			});
		//<<< >>>

		case SMURFS_SAVED:
			return Object.assign({}, state, {
				smurfs: [ ...action.payload ],
				smurfsSaved: true,
				savingSmurfs: false,
				error: null
			});

		case SAVING_SMURFS:
			return Object.assign({}, state, { savingSmurfs: true, smurfsSaved: false, error: null });
		//<<< >>>

		case UPDATING_SMURF:
			return Object.assign({}, state, { updatingSmurf: true, smurfUpdated: false, error: null });

		case SMURF_UPDATED:
			return Object.assign({}, state, {
        //smurfs: [...action.payload, ...action.payload ],
        // smurfs: [...state.smurfs.concat(...action.payload)],
       smurfs: [ ...action.payload],
				smurfUpdated: true,
				updatingSmurf: false,
				error: null
			});
		//<<< >>>

		case DELETING_SMURF:
			return Object.assign({}, state, { deletingSmurf: true, smurfDeleted: false, error: null });

		case SMURF_DELETED:
			return Object.assign({}, state, {
				smurfs: [ ...action.payload ],
				smurfDeleted: true,
				deletingSmurf: false,
				error: null
			});
		//<<< >>>

		case ERROR:
			return Object.assign({}, state, {
				fetchingSmurfs: false,
				savingSmurfs: false,
				updatingSmurf: false,
				deletingSmurf: false,
				error: 'Error fetching Smurfs'
			});

		default:
			return state;
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
