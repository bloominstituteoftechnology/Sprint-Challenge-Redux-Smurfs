import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';
export const ADDING_SMURF = 'ADDING_SMURF'
export const ERROR = 'ERROR';
export const GET_SMURF = 'GET_SMURF';
export const GETTING_SMURF = 'GETTING_SMURF';
export const SINGLE_SMURF = 'SINGLE_SMURF';
export const TOGGLE_UPDATE_SMURF = 'TOGGLE_UPDATE_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const TOGGLE_SMURF = 'TOGGLE_SMURF';

 const SmurfURL = "http://localhost:3333/smurfs";

 export const getSmurf = () => {
  const smurfs = axios.get(`${SmurfURL}`);
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
    const newSmurf = axios.post(`${SmurfURL}`, smurf);
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
     const updatedSmurf = axios.put(`${SmurfURL}/${id}`, body);
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

     export const deleteSmurf = () => {
      return {
        type: DELETE_SMURF
      }
    }

     export const toggleSmurf = index => {
      return {
        type: TOGGLE_SMURF,
        payload: index
      }
    }
  
