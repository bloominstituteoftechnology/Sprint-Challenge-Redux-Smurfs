import axios from 'axios';
export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const CREATING = "CREATING";
export const CREATED = "CREATED";
export const UPDATING = "UPDATING";
export const UPDATED = "UPDATED";
export const DELETING = "DELETING";
export const DELETED = "DELETED";
export const ERROR = "ERROR";

const fetching = () => {
  return {
      type: FETCHING
  }
}

const fetched = (data) => {
  return {
      type: FETCHED,
      payload: data
  }
}

const creating = () => {
  return {
      type: CREATING
  }
}

const created = (data) => {
  return {
      type: CREATED,
      payload: data
  }
}

const updating = () => {
  return {
      type: UPDATING
  }
}

const updated = (data) => {
  return {
      type: UPDATED,
      payload: data
  }
}

const deleting = () => {
  return {
      type: DELETING
  }
}

const deleted = () => {
  return {
      type: DELETED
  }
}

const error = (err) => {
  return {
      type: ERROR,
      payload: err
  }
}

export const fetchSmurfs = () => {
  const getSmurfs = axios.get("http://localhost:3333/smurfs");
  return function(dispatch) {
    dispatch(fetching());
    getSmurfs
      .then( res => {
        dispatch(fetched(res.data));
      })
      .catch( err => {
        dispatch(error(err));
      })
  }
}

export const createSmurf = (smurf) => {
  const postSmurf = axios.post("http://localhost:3333/smurfs", smurf);
  return function(dispatch) {
    dispatch(creating());
    postSmurf
      .then( res => {
        console.log(res);
        dispatch(created(res));
      })
      .catch( err => {
        dispatch(error(err));
      })
  }
}

export const updateSmurf = (smurf) => {
  const putSmurf = axios.put(`http://localhost:3333/smurfs${smurf.id}`, smurf);
  return function(dispatch) {
    dispatch(updating());
    putSmurf
      .then( res => {
        dispatch(updated(res.data));
      })
      .catch( err => {
        dispatch(error(err));
      })
  }
}