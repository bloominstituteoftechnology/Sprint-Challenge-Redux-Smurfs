import axios from "axios";


export const FETCHING_SMURF_START = "FETCHING_SMURF_START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURF_FAILURE = "FETCHING_SMURF_FAILURE";

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

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
let nextId = 1;

const getNewId = () => {
  nextId += 1;
  return nextId;
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF_START })
  axios
  .post("http://localhost:3333/smurfs", smurf)
  .then(response => {
    dispatch({ 
      type: ADD_SMURF_SUCCESS,
      payload: response.data, id: getNewId()
    })
  })
  .catch(error => 
    dispatch({
      type: ADD_SMURF_FAILURE,
      payload: error
    })
  )
}