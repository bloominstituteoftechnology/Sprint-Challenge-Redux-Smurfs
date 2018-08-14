const initialState = {
   smurfs: [],
   smurf: null,
   fetchingSmurfs: false,
   smurfsFetched: false,
   fetchingSmurf: false,
   smurfFetched: false,
   addingSmurf: false,
   smurfAdded: false,
   editingSmurf: false,
   smurfEdited: false,
   deletingSmurf: false,
   smurfDeleted: false,
   error: null
 };

 export default (state = initialState, action) => {
   switch(action.type) {
     case 'FETCHING_SMURFS':
        return Object.assign({}, state, { fetchingSmurfs: true });

    case 'SMURFS_FETCHED':
      return Object.assign({}, state, { smurfs: action.payload, smurfsFetched: true, fetchingSmurfs: false });

    case 'ADDING_SMURF':
      return Object.assign({}, state, { addingSmurf: true });

    case 'SMURF_ADDED':
      return Object.assign({}, state, { smurfs: action.payload, smurfAdded: true, addingSmurf: false });

    case 'FETCHING_SMURF':
      return Object.assign({}, state, { fetchingSmurf: true });

    case 'SMURF_FETCHED':
      return Object.assign({}, state, { smurf: action.payload, smurfFetched: true, fetchingSmurf: false });

    case 'EDITING_SMURF':
      return Object.assign({}, state, { editingSmurf: true });

    case 'SMURF_EDITED':
      return Object.assign({}, state, { smurfs: action.payload, smurf: action.payload.find(smurf => smurf.id === state.smurf.id), smurfEdited: true, editingSmurf: false });

    case 'DELETING_SMURF':
      return Object.assign({}, state, { deletingSmurf: true });

    case 'SMURF_DELETED':
      return Object.assign({}, state, { smurfs: action.payload, smurf: null, smurfDeleted: true, deletingSmurf: false });


    case 'ERROR':
      return Object.assign({}, state, { error: action.payload });

     default:
      return state;
   }
 }
