const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  smurfsFetched: false,
  addingSmurf: false,
  smurfAdded: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

export default (state = initialState, action) => {
  
  switch(action.type) {
    case "FETCHING_SMURFS":
      return {
        ...state,
        smurfs: action.smurfs,
        fetchingSmurfs: true,
        smurfsFetched: false,
        addingSmurf: false,
        smurfAdded: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null
      }

    case "FETCHED_SMURF":
      return {
        ...state,
        smurfs: action.smurfs,
        fetchingSmurfs: false,
        smurfsFetched: true,
        addingSmurf: false,
        smurfAdded: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null
      };
    
    case "ADDING_SMURF":
      return {
        ...state,
        smurfs: action.smurfs,
        fetchingSmurfs: false,
        smurfsFetched: false,
        addingSmurf: true,
        smurfAdded: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null
      };

    case "ADDED_SMURF":
      return {
        ...state,
        smurfs: action.smurfs,
        fetchingSmurfs: false,
        smurfsFetched: false,
        addingSmurf: false,
        smurfAdded: true,
        updatingSmurf: true,
        deletingSmurf: false,
        error: null
    }

    case "UPDATING_SMURF":
      return {
          ...state,
          smurfs: action.smurfs,
          fetchingSmurfs: false,
          smurfsFetched: false,
          addingSmurf: false,
          smurfAdded: false,
          updatingSmurf: true,
          deletingSmurf: false,
          error: null
      };
  
    case "DELETING_SMURF":
      return {
        ...state,
        smurfs: action.smurfs,
        fetchingSmurfs: false,
        smurfsFetched: false,
        addingSmurf: false,
        smurfAdded: false,
        updatingSmurf: false,
        deletingSmurf: true,
        error: null
    }

    case "ERROR":
      return {
        ...state,
        smurfs: action.smurfs,
        fetchingSmurfs: false,
        smurfsFetched: false,
        addingSmurf: false,
        smurfAdded: false,
        updatingSmurf: true,
        deletingSmurf: false,
        error: true
    };

    default: 
      return state;
  }
};
