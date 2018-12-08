import axios from "axios";

const url = "http://localhost:3333/smurfs"

export const addSmurf = (newSmurf) => {
  return dispatch => {
    dispatch( { type: "ADDING_SMURF" });
    console.log("A message before the axios call")
    axios
      .post(url, newSmurf)
      .then(response => {
        dispatch({ type: "ADDED", smurfs: response.data })
      .catch(error => {
        dispatch({ type: "ERROR", errorMessage: "An error occurred" })
      })
      })
  }
}

export const fetchSmurf = () => {
  return dispatch => {
    dispatch( { type: "FETCHING_SMURF" });
    axios
      .get(url)
      .then(response => {
        dispatch({ type: "FETCHED", smurfs: response.data })
      .catch(error => {
        dispatch({ type: "ERROR", errorMessage: "An error occurred" })
      })
      })
  }
}