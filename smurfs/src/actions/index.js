import axios from 'axios';

export const ERROR = 'ERROR';
export const ADD_SMURF = 'ADD_SMURF';
export const ADDING_SMURF = 'ADDING_SMURF'
export const GET_SMURF = 'GET_SMURF';
export const GETTING_SMURF = 'GETTING_SMURF';
export const SINGLE_SMURF = 'SINGLE_SMURF';
export const TOGGLE_UPDATE_SMURF = 'TOGGLE_UPDATE_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const DELETING_SMURF = 'DELETING_SMURF';
export const TOGGLE_SMURF = 'TOGGLE_SMURF';

const URL = "http://localhost:3333/smurfs";

export const getSmurf = () => {
  const smurfs = axios.get(`${URL}`);
    return dispatch => {
      dispatch({ type: GETTING_SMURF });
      smurfs 
        .then(response => {
          dispatch({ type: GET_SMURF, payload: response.data })
        })
        .catch(error => {
          dispatch({ type: ERROR, payload: error });
        })
    }
}

export const addSmurf = smurf => {
  const newSmurf = axios.post(`${URL}`, smurf);
   return dispatch => {
     dispatch({ type: ADDING_SMURF })
      newSmurf
      .then(({data}) => {
        dispatch({ type: ADD_SMURF, payload: data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      })
    }
}

export const updateSmurf = (id, body) => {
   const updatedSmurf = axios.put(`${URL}/${id}`, body);
     return dispatch => {
       dispatch({ type: UPDATING_SMURF })
       updatedSmurf
       .then(({data}) => {
         dispatch({ type: UPDATE_SMURF, payload: data })
       })
       .catch(error => {
         dispatch({ type: ERROR, payload: error });
       });
     }
   }

  export const updateSingleSmurf = smurf => {
    return {
      type: SINGLE_SMURF,
      payload: smurf

    }
  }

  export const toggleUpdateSmurf = () => {
    return {
      type: TOGGLE_UPDATE_SMURF
    }
  }

  export const deleteSmurf = (id) => {
    const deleteSmurf = axios.delete(`${URL}/${id}`);
   return dispatch => {
     dispatch({ type: DELETING_SMURF })
      deleteSmurf
      .then(({data}) => {
        dispatch({ type: DELETE_SMURF, payload: data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      })
    }
  }

  export const toggleSmurf = index => {
    return {
      type: TOGGLE_SMURF,
      payload: index
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
