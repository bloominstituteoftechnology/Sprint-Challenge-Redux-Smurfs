import Axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const CRUD_ERROR = 'CRUD_ERROR';
export const POSTING_SMURF = 'POSTING_SMURF';
export const POSTED_SMURF = 'POSTED_SMURF';
export const GETTING_SMURFS = 'GETTING_SMURFS';
export const GOT_SMURFS = 'GOT_SMURFS';
export const PUTTING_SMURF = 'PUTTING_SMURF';
export const PUT_SMURF = 'PUT_SMURF';
export const DELETING_SMURF = 'DELETING_SMURF';
export const DELETED_SMURF = 'DELETED_SMURF';

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
const dataSource = 'http://localhost:3333/smurfs';

// Create (POST)
export const postSmurf = (newSmurf) => {
    return (dispatch) => {
        dispatch( {type: POSTING_SMURF} );
        Axios
            .post(dataSource, newSmurf)
            .then( (response) => {
                dispatch( {type: POSTED_SMURF, payload: response.data} );
            })
            .catch( (err) => {
                dispatch( {type: CRUD_ERROR, payload: err.message} )
            });
    };
};

// Read (GET)
export const getSmurfs = () => {
    return (dispatch) => {
        dispatch( {type: GETTING_SMURFS} );
        Axios
            .get(dataSource)
            .then( (response) => {
                dispatch( {type: GOT_SMURFS, payload: response.data} );
            })
            .catch( (err) => {
                dispatch( {type: CRUD_ERROR, payload: err.message} );
            });
    };
};

// Update (PUT)
export const putSmurf = (updatedSmurf, smurfId) => {
    return (dispatch) => {
        dispatch( {type: PUTTING_SMURF} );
        Axios
            .put(`${dataSource}/${smurfId}`, updatedSmurf)
            .then( (response) => {
                dispatch( {type: PUT_SMURF, payload: response.data} );
            })
            .catch( (err) => {
                dispatch( {type: CRUD_ERROR, payload: err.message} )
            });
    };
};

// Delete (DELETE)
export const deleteSmurf = (smurfId) => {
    return (dispatch) => {
        dispatch( {type: DELETING_SMURF} );
        Axios
            .delete(`${dataSource}/${smurfId}`)
            .then( (response) => {
                dispatch( {type: DELETED_SMURF, payload: response.data} );
            })
            .catch( (err) => {
                dispatch( {type: CRUD_ERROR, payload: err.message} );
            });
    };
};
