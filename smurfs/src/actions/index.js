/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios";

export const FETCHINGSMURFS = "FETCHINGSMURFS";
export const FETCHEDSMURFS = "FETCHEDSMURFS";
export const ADDINGSMURFS = "ADDINGSMURFS";
export const UPDATINGSMURFS = "UPDATINGSMURFS";
export const DELETINGSMURFS = "DELETINGSMURFS";
export const ERROR = "ERROR";

export const getSmurf = () => {
  const request = axios.get("http://localhost:3333/api/smurfs");
  return dispatch => {
    dispatch({ type: FETCHINGSMURFS });
    request
      .then(({ data }) => {
        dispatch({ type: FETCHEDSMURFS, smurfs: data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const addSmurf = smurf => {
  const request = axios.post("http://localhost:3333/api/smurfs", smurf);
  return dispatch => {
    dispatch({ type: ADDINGSMURFS });
    request
      .then(({ data }) => {
        dispatch({ type: FETCHEDSMURFS, smurfs: data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const deleteSmurf = id => {
  const request = axios.delete(`http://localhost:3333/api/smurfs/${id}`);
  return dispatch => {
    request
      .then(({ data }) => {
        dispatch({ type: DELETINGSMURFS, smurfs: data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const updateSmurf = smurf => {
  return { type: UPDATINGSMURFS, smurf };
};

export const saveSmurf = (id, smurf) => {
  return dispatch => {
    const request = axios.put(`http://localhost:3333/smurfs/${id}`, smurf);
    request
      .then(({ data }) => dispatch({ type: FETCHEDSMURFS, smurfs: data }))
      .catch(err => {
        console.log(err);
      });
  };
};
