import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";
export const SAVING_SMURFS = "SAVING_SMURFS";
export const SMURFS_SAVED = "SMURFS_SAVED";
export const DELETING_SMURF = "DELETING_SMURF";
export const DELETED_SMURF = "DELETED_SMURF";


export const fetchingSmurfsAction = () => {
        const request = axios.get('http://localhost:3333/smurfs/');

        return (dispatch) => {
        dispatch({type: FETCHING});

        request.then(response => {
        dispatch({type: FETCHED, smurfs: response.data});
    })

        .catch(err => {
        dispatch({type: ERROR, error: err});

    });
  };
};


export const addSmurf = (name, age, height) => {
        const smurf= {name:name, age:age, height:height};
        const request = axios.post('http://localhost:3333/smurfs/', smurf);

        return (dispatch) => {
        dispatch({type: SAVING_SMURFS});

        request.then(response => {
        dispatch({type: SMURFS_SAVED, smurfs: response.data});
    })

        .catch(err => {
        dispatch({type: ERROR, error: err});

    });
  };
};

export const deleteSmurf = (smurfId) => {
        const smurf = {id:smurfId};

        const request = axios.delete(`http://localhost:3333/smurfs/${smurfId}`,
        smurf)


        return (dispatch) => {
        dispatch({type: DELETING_SMURF});

        request.then(response => {
        dispatch({type: DELETED_SMURF, smurfs: response.data});
    })

        .catch(err => {
        dispatch({type: ERROR, error: err});

    });
  };
};










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
