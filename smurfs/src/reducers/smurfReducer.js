import { GET_SMURFS, DELETE_SMURF, ADD_SMURF } from '../actions/types';


const initialState = {
    smurfs: []
};

export default function(state = initialState, action)  {
    switch (action.type) {
        case GET_SMURFS:
            return {
                ...state,
                smurfs: action.payload
            };
        case DELETE_SMURF:
            return {
                ...state,
                smurfs: state.smurfs.filter(smurf =>
                    smurf.id !== action.payload)
            };
        case ADD_SMURF: 
            return {
                ...state,
                smurfs: [action.payload, ...state.friends]
            }


        default:

            return state;
    }
}