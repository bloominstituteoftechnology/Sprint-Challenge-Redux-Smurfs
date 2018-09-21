/*
  Be sure to import in all of the action types from `../actions`
*/

export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_SMURFS':
      return { ...state, fetchingSmurfs: true };
    case 'FETCH_SMURFS_SUCCESS':
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        fetched: true
      };
    case 'FETCH_SMURFS_ERROR':
      return { ...state, fetchingSmurfs: false, error: action.payload };
    case 'ADD_SMURF':
      return { ...state, addingSmurf: true };
    case 'ADD_SMURF_SUCCESS':
      return { ...state, addingSmurf: false, smurfs: action.payload };
    case 'ADD_SMURF_ERROR':
      return { ...state, addingSmurf: false, error: action.payload };

    default:
      return state;
  }
}
