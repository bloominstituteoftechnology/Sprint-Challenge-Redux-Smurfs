import axios from "axios";
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

// Action types
export const LOADING = "LOADING";
export const COMPLETE = "COMPLETE";
export const ERROR = "ERROR";
export const ADDING = "ADDING";
export const UPDATING = "UPDATING";
export const DELETING = "DELETING";

export const loadSmurfsAction = () => {
  return dispatch => {
    dispatch({
      type: LOADING,
    })
    axios
    .get("http://localhost:3333/smurfs")
    .then(response => {
      console.log(response);
      dispatch({
        type: COMPLETE,
        payload: response.data
      })
    })
    .catch(error => {
      dispatch({
        type: ERROR,
        payload: "Unable to load the Smurfs in your village. Please refresh page to try again"
      })
    })
  }
}

export const addSmurfAction = (nameValue, ageValue, heightValue) => {
  return dispatch => {
    dispatch({ type: ADDING });
    axios
    .post("http://localhost:3333/smurfs", {
      name: nameValue,
      age: parseInt(ageValue, 10),
      height: heightValue,
    })
    .then(response => {
      console.log(response);
      dispatch({
        type: COMPLETE,
        payload: response.data,
      })
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: ERROR,
        payload: "Unable to add new Smurf to your village, please refresh the page and try again.",
      })
    })
  }
}

export const updateSmurfAction = (nameValue, ageValue, heightValue, idValue) => {
  return dispatch => {
    dispatch({
      type: UPDATING,
    })
    axios
      .put(`http://localhost:3333/smurfs/${idValue}`, {
        name: nameValue,
        age: parseInt(ageValue, 10),
        height: heightValue,
      })
      .then(response => {
        console.log(response);
        dispatch({
          type: COMPLETE,
          payload: response.data,
        })
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: ERROR,
          payload: "Unable to update this Smurf's information. Please refresh the page and try again.",
        })
      })
  }
}

export const deleteSmurfAction = (idValue) => {
  return dispatch => {
    dispatch({
      type: DELETING,
    })
    axios
      .delete(`http://localhost:3333/smurfs/${idValue}`)
      .then(response => {
        console.log(response);
        dispatch({
          type: COMPLETE,
          payload: response.data,
        })
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: ERROR,
          payload: 'Unable to delete this Smurf from your village, Please try again',
        })
      })
  }
}