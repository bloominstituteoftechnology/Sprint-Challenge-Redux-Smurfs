import axios from "axios"

export const FAILURE = "FAILURE";
export const SUCCESS = "SUCCESS";
export const FETCHING = "FETCHING";

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCHING, loading: true });

    axios
        .get(`http://localhost:3333/smurfs`)
        .then(({ data }) => {
            console.log(data);
            dispatch({ type: SUCCESS, smurfs: data, loading: false });
        })
        .catch(err => {
            dispatch({ type: FAILURE, error: err, loading: false});
        });
};