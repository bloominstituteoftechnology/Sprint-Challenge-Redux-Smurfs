import axios from 'axios';

export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const LOADING = "LOADING";
export const ADDING = "ADDING";
export const ADDED = "ADDED";
export const EDITING = "EDITING";
export const EDITED = "EDITED";
export const DELETING = "DELETING";
export const DELETED = "DELETED";
export const EDITFORM = "EDITFORM";



export function fetchSmurfs() {
    return dispatch => {
        dispatch({ type: LOADING })
        axios
            .get('http://localhost:3333/smurfs')
            .then(response => {
                // console.log(response);
                dispatch({
                    type: SUCCESS,
                    payload: response.data
                });
            })
            .catch(err => {
                dispatch({
                    type: FAILURE,
                    payload: err
                })
            })
    }
}

export function addSmurf(smurf) {

    const newSmurf = {
        name: smurf.name,
        age: smurf.age,
        height: smurf.height
    }
    return dispatch => {
        dispatch({ type: ADDING })
        axios
            .post(`http://localhost:3333/smurfs`, newSmurf)
            .then(response => {
                console.log(response)
                dispatch({
                    type: ADDED,
                    payload: response.data
                });
            })
            .catch(err => {
                dispatch({
                    type: FAILURE,
                    payload: err
                })
            })
    }
}

export function deleteSmurf(id) {
    return dispatch => {
        dispatch({ type: DELETING })
        axios
            .delete(`http://localhost:3333/smurfs/${id}`)
            .then(response => {
                dispatch({
                    type: DELETED,
                    payload: response.data
                });
            })
            .catch(err => {
                dispatch({
                    type: FAILURE,
                    payload: err
                })
            })
    }
}

export function editForm(smurf) {
    return dispatch => {
        dispatch({ type: EDITFORM, payload: smurf })
    }
}
export function editSmurf(id, smurf) {
    return dispatch => {
        dispatch({ type: EDITING})
        axios
            .put(`http://localhost:3333/smurfs/${id}`, smurf)
            .then(response => {
                dispatch({
                    type: EDITED,
                    payload: response.data
                });
            })
            .catch(err => {
                dispatch({
                    type: FAILURE,
                    payload: err
                })
            })
    }
    
}


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
