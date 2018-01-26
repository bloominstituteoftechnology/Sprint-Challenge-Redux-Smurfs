import axios from 'axios';

export const RESET_ACTION_STATE = 'RESET_ACTION_STATE';

export const SMURFS_FETCHING = 'SMURFS_FETCHING';
export const SMURFS_FETCHING_SUCCESS = 'SMURFS_FETCHING_SUCCESS';
export const SMURFS_FETCHING_ERROR = 'SMURFS_FETCHING_ERROR';

export const SMURF_ADDING = 'SMURF_ADDING';
export const SMURF_ADDING_SUCCESS = 'SMURF_ADDING_SUCCESS';
export const SMURF_ADDING_ERROR = 'SMURF_ADDING_ERROR';

export const SMURF_EDITING = 'SMURF_EDITING';
export const SMURF_EDITING_SUCCESS = 'SMURF_EDITING_SUCCESS';
export const SMURF_EDITING_ERROR = 'SMURF_EDITING_ERROR';

export const SMURF_DELETING = 'SMURF_DELETING';
export const SMURF_DELETING_SUCCESS = 'SMURF_DELETING_SUCCESS';
export const SMURF_DELETING_ERROR = 'SMURF_DELETING_ERROR';

const ADDRESS = 'http://localhost:3333';

export const getSmurfs = _ => {
  const smurfAPiCall = axios.get(`${ADDRESS}/smurfs`);

  return dispatch => {
    dispatch({ type: RESET_ACTION_STATE });

    dispatch({ type: SMURFS_FETCHING });

    setTimeout(_ => {
      smurfAPiCall
        .then(({ data }) => {
          dispatch({ type: SMURFS_FETCHING_SUCCESS, payload: data });
        })
        .catch(err => {
          dispatch({ type: SMURFS_FETCHING_ERROR, payload: err });
        });
    }, 1000);
  };
};

export const addSmurf = smurf => {
  const smurfAPiCall = axios.post(`${ADDRESS}/smurfs`, smurf);

  return dispatch => {
    dispatch({ type: RESET_ACTION_STATE });

    dispatch({ type: SMURF_ADDING });

    setTimeout(_ => {
      smurfAPiCall
        .then(({ data }) => {
          dispatch({ type: SMURF_ADDING_SUCCESS, payload: data });
        })
        .catch(err => {
          dispatch({ type: SMURF_ADDING_ERROR, payload: err });
        });
    }, 1000);
  };
};

export const editSmurf = editedSmurf => {
  const smurfAPiCall = axios.put(
    `${ADDRESS}/smurfs/${editedSmurf.id}`,
    editedSmurf
  );

  return dispatch => {
    dispatch({ type: RESET_ACTION_STATE });

    dispatch({ type: SMURF_EDITING });

    setTimeout(_ => {
      smurfAPiCall
        .then(({ data }) => {
          dispatch({ type: SMURF_EDITING_SUCCESS, payload: data });
        })
        .catch(err => {
          dispatch({ type: SMURF_EDITING_ERROR, payload: err });
        });
    }, 1000);
  };
};

export const deleteSmurf = id => {
  const smurfAPiCall = axios.delete(`${ADDRESS}/smurfs/${id}`);

  return dispatch => {
    dispatch({ type: RESET_ACTION_STATE });

    dispatch({ type: SMURF_DELETING });

    setTimeout(_ => {
      smurfAPiCall
        .then(({ data }) => {
          dispatch({
            type: SMURF_DELETING_SUCCESS,
            payload: data.SmurfRemoved,
          });
        })
        .catch(err => {
          dispatch({ type: SMURF_DELETING_ERROR, payload: err });
        });
    }, 1000);
  };
};
