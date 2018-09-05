import axios from "axios";

export const PENDING_SMURFS = "PENDING_SMURFS";
export const SUCCESS_SMURFS = "SUCCESS_SMURFS";
export const ERROR_SMURFS = "ERROR_SMURFS";

export const getSmurfs = () => {
  const smurfs = axios.get("http://localhost:3333/smurfs");
  return dispatch => {
    dispatch({ type: PENDING_SMURFS });
    smurfs
    .then(response => {
      dispatch({ type: SUCCESS_SMURFS, payload: response.data });
    })
    .catch(err => {
      dispatch({
        type: ERROR_SMURFS,
        payload: "Something went wrong with fetching Smurfs"
      });
    });
  };
};

export const addSmurf = smurfData => {
  const smurfs = axios.post("http://localhost:3333/smurfs", smurfData) ;
  return dispatch => { dispatch({ type: PENDING_SMURFS });
    smurfs
    .then(response => {
      dispatch({ type: SUCCESS_SMURFS, payload: response.data });
    })
    .catch(err => {
      dispatch({
        type: ERROR_SMURFS,
        payload: "Something went wrong with fetching Smurfs"
      });
    });
  };
};

export const editSmurf = (id, smurfObject) => {
  const smurfs = axios.put(`http://localhost:3333/smurfs/${id}`, smurfObject);
  return dispatch => {
    smurfs.then(response => {
      dispatch({ type: SUCCESS_SMURFS, payload: response.data })
    })
    .catch(err => {
      dispatch({
        type: ERROR_SMURFS,
        payload: "Something went wrong with editing Smurfs"
      });
    });
  }
}

export const deleteSmurf = id => {
  const smurfs = axios.delete(`http://localhost:3333/smurfs/${id}`);
  return dispatch => { dispatch({type: PENDING_SMURFS});
  smurfs.then(response => {
   dispatch({type: SUCCESS_SMURFS, payload: response.data})})
  .catch(err => dispatch({ type: ERROR_SMURFS, payload:'Something went wrong with deleting smurf.'}))
  }
}