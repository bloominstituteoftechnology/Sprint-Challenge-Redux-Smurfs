
const smurfReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADDING_SMURF':
      return { ...state, adding: true, added: false };

    case 'SMURF_ADDED':
      return { ...state, added: true, adding: false, payload: action.payload };

    case 'ERROR_ADDING_SMURF':
      return { ...state, added: false, adding: true, payload: action.payload };

    case 'LOADING_SMURFS':
      return { ...state, loading: true, loaded: false };

    case 'SMURFS_LOADED':
      return { ...state, loaded: true, loading: false, payload: action.payload };

    case 'ERROR_LOADING_SMURFS':
      return { ...state, loaded: false, loading: false, payload: action.payload };

    case 'UPDATING_SMURF':
      return { ...state, updating: true, updated: false };

    case 'SMURF_UPDATED':
    console.log('update payload', action.payload);
      return { ...state, updated: true,
        updating: false,
        payload: state.payload.map(item =>
          (item.id === action.payload.id) ?
            item = action.payload : item )
      };

    case 'ERROR_UPDATING_SMURFS':
      return { ...state, updated: false, updating: false, payload: action.payload };

    case 'REMOVING_SMURF':
      return { ...state, removing: true, removed: false };

    case 'SMURF_REMOVED':
      return { ...state, removed: true, removing: false, payload: state.payload.filter(item => item.id !== action.payload) };

    case 'ERROR_REMOVING_SMURF':
      return { ...state, removed: false, removing: false, payload: action.payload };

    default:
      return state;
  }
}

export default smurfReducer;