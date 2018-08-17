import {
  FETCHING,
  FETCHED,
  UPDATING,
  UPDATED,
  DELETING,
  DELETED,
  EDITING,
  EDITED
} from "../actions";

const initialState = {
  smurfsFetching: false,
  smurfsFetched: false,
  smurfsEditing: false,
  smurfsEdited: false,
  smurfsUpdating: false,
  smurfsUpdated: false,
  smurfsDeleting: false,
  smurfsDeleted: false,
  smurfs: [],
  error: null
};

export const fetcher = (state = initialState, action) => {
  switch (action.type) {
      
    case FETCHING:
      return Object.assign({}, state, {
        smurfsFetching: true
      });

    case FETCHED:
      return Object.assign({}, state, {
        smurfsFetched: true,
        smurfsFetching: false,
        smurfs: action.payload
      });

    case UPDATING:
      return Object.assign({}, state, {
        smurfsUpdating: true 
      });
      
    case UPDATED:
      return Object.assign({}, state, {
        smurfsUpdating: false,
        smurfsUpdated: true,
        smurfs: action.payload
      });

    case DELETING:
      return Object.assign({}, state, {
        smurfsDeleting: true 
      });
      
    case DELETED:
      return Object.assign({}, state, {
        smurfsDeleting: false,
        smurfsDeleted: true,
        smurfs: action.payload
      });

    case EDITING:
      return Object.assign({}, state, {
        smurfsEditing: true 
      });
      
    case EDITED:
      return Object.assign({}, state, {
        smurfsEditing: false,
        smurfsEdited: true,
        smurfs: action.payload
      });

    default:
      return state;
  }
};
