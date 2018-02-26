export default function smurfReducer(state = {smurfs: []}, action) {

  switch (action.type) {

    case "GET_SMURFS":
      return {smurfs: action.payload};
    default:
      return state;
  }
}
