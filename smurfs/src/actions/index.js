import axios from 'axios';


export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURFS_FETCHING_SUCCESS = 'SMURFS_FETCHING_SUCCESS';
export const  SMURFS_FETCHING_ERROR = 'SMURFS_FETCHING_ERROR';

export const fetchSmurfs = () => {
    
    return dispatch => { 
        dispatch({ type: 'FETCHING_SMURFS' })

    axios
    .get('http://localhost:3333/smurfs')

    .then(response => {
        console.log(response.data);
        dispatch({ type: 'SMURFS_FETCHING_SUCCESS', payload: response.data });
    })
    .catch(error => {
        console.log(error);
        dispatch({ type: 'SMURFS_FETCHING_ERROR'});

    })    
    };    
};

const addSmurf = (smurf) => {
   

    axios.post('http://localhost:3333/smurfs', smurf)
    .then(response => this.setState({smurfs:response.data}))
    .catch(error => console.log(error));
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
