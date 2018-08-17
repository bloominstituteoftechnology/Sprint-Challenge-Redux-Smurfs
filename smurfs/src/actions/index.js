import axios from "axios";
export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";
export const UPDATED = "UPDATED";
export const UPDATING = "UPDATING";
export const DELETED = "DELETED";
export const DELETING = "DELETING";
export const EDITED = "EDITED";
export const EDITING = "EDITING";

export const smurfFetcher = ( ) => {
  return function(dispatch) {
    dispatch({ type: FETCHING });

    axios
      .get("http://localhost:3333/smurfs")
      .then(data => {
        dispatch({ type: FETCHED, payload: data.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, error: err });
      });
    };
};

export const smurfUpdater = (props) => {
    return function(dispatch) {
        dispatch({ type: UPDATING });

    const newSmurf= {
        name: props.name,
        age: props.age,
        height: props.height,
    }
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(data => {
        dispatch({ type: UPDATED, payload: data.data });
    });
  };
};


export const smurfDeleter = (id) => {
    return function(dispatch) {
        dispatch({ type: DELETING });

    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(data => {
        dispatch({ type: DELETED, payload: data.data });
    });
  };
};

export const smurfEditer = (id, editedSmurf) => {
    return function(dispatch) {
        dispatch({ type: EDITING });

    axios
      .put(`http://localhost:3333/smurfs/${id}`, editedSmurf)
      .then(data => {
        dispatch({ type: EDITED, payload: data.data });
    });
  };
};

