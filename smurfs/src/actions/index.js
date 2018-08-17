/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios";

export const GETTINGSMURFS = "GETTINGSMURFS";
export const SMURFSGOT = "SMURFSGOT";
export const ERROR = "ERROR";
export const SAVINGSMURFS = "SAVINGSMURFS";
export const SMURFSSAVED = "SMURFSSAVED";
export const UPDATINGSMURF = "UPDATINGSMURF";
export const SMURFUPDATED = "SMURFUPDATED";
export const DELETINGSMURFS = "DELETINGSMURFS";
export const SMURFSDELETED = "SMURFSDELETED";
export const CHANGETARGET = "CHANGETARGET";
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
export const smurfsFetch = () => {
  return function(dispatch) {
    dispatch({ type: GETTINGSMURFS });

    axios
      .get("http://127.0.0.1:3333/smurfs")
      .then(function(response) {
        dispatch({ type: SMURFSGOT, payload: response.data });
      })
      .catch(function(error) {
        console.log(error);
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const smurfsAdd = (smurfObj) => {
  console.log(smurfObj)
  return function(dispatch) {
    dispatch({ type: SAVINGSMURFS });
    axios
      .post("http://127.0.0.1:3333/smurfs",smurfObj)
      .then(function(response) {
        dispatch({ type: SMURFSSAVED, payload: response.data });
      })
      .catch(function(error) {
        console.log(error);
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const singleSmurf = (changeobj) =>{
  return function(dispatch) {
  dispatch({ type: CHANGETARGET, payload: changeobj });
  }
}

export const smurfDelete = (friendID) => {
  return function(dispatch) {
    dispatch({ type: DELETINGSMURFS });
    axios
      .delete(`http://127.0.0.1:3333/smurfs/${friendID}`)
      .then(function(response) {
        dispatch({ type: SMURFSDELETED, payload: response.data });
      })
      .catch(function(error) {
        console.log(error);
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const smurfsEdit = (friendID,friendObj) => {
  return function(dispatch) {
    dispatch({ type: UPDATINGSMURF });
    axios
      .put(`http://127.0.0.1:3333/smurfs/${friendID}`,friendObj)
      .then(function(response) {
        console.log(response)
        dispatch({ type: SMURFUPDATED, payload: response.data });
      })
      .catch(function(error) {
        console.log(error);
        dispatch({ type: ERROR, payload: error });
      });
  };
};