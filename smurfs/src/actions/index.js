import axios from "axios";


export const FETCHING_SMURF_START = "FETCHING_SMURF_START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURF_FAILURE = "FETCHING_SMURF_FAILURE";


export const fetchSmurf = () => dispatch => {
  dispatch({ type: FETCHING_SMURF_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(response => {
      console.log(response)
      dispatch({ 
        type: FETCHING_SMURF_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => 
      dispatch({
        type: FETCHING_SMURF_FAILURE,
        payload: error
      })
    )
}
