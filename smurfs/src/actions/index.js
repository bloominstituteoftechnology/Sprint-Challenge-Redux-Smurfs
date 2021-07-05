// we'll need axios
import axios from 'axios';
 export const FETCHING_SMURFS = "FETCHING_SMURFS";
 export const FETCHED_SMURFS = "FETCHED_SMURFS";
 export const CREATED_SMURF = "CREATE_SMURF";
 export const ERROR_FETCHING = "ERROR_FETCHING";
 export const CREATING_SMURF = "CREATING_SMURF";


export const getSmurfs = () => {
    const getsmurfs = axios.get("http://localhost:3333/smurfs");
    return (dispatch => {
        dispatch({type: FETCHING_SMURFS})
        
        getsmurfs.then((response) => {
         //console.log(response);
            dispatch({type: FETCHED_SMURFS, payload: response.data });
        })
        .catch((err) => {
            dispatch({type: ERROR_FETCHING, payload: err})
        });
    });
}

export const addSmurf = smurf => {
  const createSmurfs = axios.post("http://localhost:3333/smurfs/", smurf);
    return (dispatch => {
        dispatch({type: CREATING_SMURF})
        
        createSmurfs.then((response) => {
         //console.log(response);
            dispatch({type: CREATED_SMURF, payload: smurf });
        })
        .catch((err) => {
            dispatch({type: ERROR_FETCHING, payload: err})
        });
    });

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
