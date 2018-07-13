/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from 'axios';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const SAVING = 'SAVING';
export const SAVED = 'SAVED';
export const DELETING = 'DELETING';
export const DELETED = 'DELETED';
export const UPDATING = 'UPDATING';
export const UPDATED = 'UPDATED';
export const ERROR = 'ERROR';

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

const URL = 'http://localhost:3333/smurfs';

export const fetchReq = () => {
    return (dispatch) => {
        dispatch({type: FETCHING});
        axios.get(URL)
        .then(({data}) => {
            // console.log(data);
            dispatch({type: FETCHED, payload: data});
        })
        .catch((err) => {
            dispatch({type: ERROR, payload: err})
        });
    };
};

export const submitReq = (smurf) => {
    return (dispatch) => {
        dispatch({type: SAVING});
        axios.post(URL, smurf)
        .then(({data}) => {
            dispatch({type: SAVED, payload: data});
        })
        .catch((err) => {
            dispatch({type: ERROR, payload: err})
        });
    };
};

export const deleteReq = (id) => {
    return (dispatch) => {
        dispatch({type: DELETING});
        axios.delete(`${URL}/${id}`)
        .then(({data}) => {
            dispatch({type: DELETED, payload: data});
        })
        .catch((err) => {
            dispatch({type: ERROR, payload: err})
        });
    };
};

export const updateReq = (id, smurf) => {
    return (dispatch) => {
        dispatch({type: UPDATING});
        axios.put(`${URL}/${id}`, smurf)
        .then(({data}) => {
            dispatch({type: UPDATED, payload: data});
        })
        .catch((err) => {
            dispatch({type: ERROR, payload: err})
        });
    };
};
