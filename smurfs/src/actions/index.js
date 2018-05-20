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

import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';

export const SAVING = 'SAVING';
export const SAVED = 'SAVED';

export const UPDATING = 'UPDATING';
export const UPDATED = 'UPDATED';

export const DELETING = 'DELETING';
export const DELETED = 'DELETED';

export const ERROR = 'ERROR';

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

const saving = () => {
    return {
        type: SAVING
    }
}

const saved = (data) => {
    return {
        type: SAVED,
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

const deleted = (data) => {
    return {
        type: DELETED,
        payload: data
    }
}

const error = (err) => {
    return {
        type: ERROR,
        payload: err
    }
}

export const getSmurfs = () => {
    const promise = axios.get('http://localhost:3333/smurfs');
    console.log("fetching smurfs... ")
    return function(dispatch) {
        dispatch(fetching());
        promise
            .then( res => {
                setTimeout(() => {
                    console.log("result of get request: ", res.data)
                    dispatch(fetched(res.data));
                }, 1000);
            })
            .catch( err => {
                dispatch(error(err));
            })
    }
}

export const addSmurf = (smurf) => {
    const promise = axios.post('http://localhost:3333/smurfs', smurf);
    return function(dispatch) {
        dispatch(saving());
        promise
            .then( res => {
                dispatch(saved(res.data))
            })
            .catch( err => {
                dispatch(error(err));
            })
    }
}

export const updateSmurf = (smurf) => {
    const promise = axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    return function(dispatch) {
        dispatch(updating())
        promise
            .then( res  => {
                dispatch(updated(res.data));
            })
            .catch( err => {
                dispatch(error(err));
            })
    }
}

export const deleteSmurf = (smurf) => {
    const promise = axios.delete(`http://localhost:3333/smurfs/${smurf.id}`)
    return function(dispatch) {
        dispatch(deleting())
        promise 
            .then( res => {
                console.log("deleted res ", res.data);
                dispatch(deleted(res.data));
            })
            .catch( err => {
                dispatch(error(err));
            })
    }
}