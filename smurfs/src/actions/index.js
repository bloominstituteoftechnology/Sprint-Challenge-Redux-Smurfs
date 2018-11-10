import axios from "axios";

export const GET_SMURFS = "GET_SMURFS";
export const FOUND_SMURFS = "FOUND_SMURFS";
export const ERROR = "ERROR";



export const getSmurfs = () => {
    return dispatch => {
        dispatch({
            type: GET_SMURFS,
            payload: "Rounding up Smurfs"
        });
        axios
            .get('http://localhost:3333/smurfs')
            .then(response => {
                dispatch({
                    type: FOUND_SMURFS,
                    payload: response.data
                });
            })
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: ERROR,
                    payload: 'Could not find Smurfs!'
                })
            })
    };
};

export const newSmurf = (newSmurf) => {
    return (dispatch) => {
        dispatch({
            type: GET_SMURFS,
            payload: "Rounding up Smurfs"
        })
        axios
            .post('http://localhost:3333/smurfs', newSmurf)
            .then(response => {
                dispatch({
                    type: FOUND_SMURFS,
                    payload: response.data
                })
            })
            .catch((err) => {
                console.log(err)
                dispatch({
                    type: ERROR,
                    payload: 'Could not find Smurfs!'
                })
            })
    }
}