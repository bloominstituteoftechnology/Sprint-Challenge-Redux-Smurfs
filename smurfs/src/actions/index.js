/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';


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



export const SMURFGETTING = 'SMURFGETTING';
export const SMURFGOT = 'SMURFGOT';
export const SMURFPOST = 'SMURFPOST';
export const SMURFDELETE = 'SMURFDELETE';
export const ERROR = 'ERROR';



export const getSmurfs = () => dispatch => {
  dispatch({type: SMURFGETTING});

  axios
  .get('http://localhost:3333/smurfs')
  .then(response =>{
    dispatch({type: SMURFGOT, smurfs: response.data })
  })
  .catch(err =>{
    dispatch({type: ERROR, errorMessage: 'couldnt get smurfs'})
  })
}

export const postSmurfs = ({name, age, height}) => dispatch => {
  dispatch({type: SMURFGETTING});
  axios.post('http://localhost:3333/smurfs', {
    name,
    age,
    height
  })
  .then(response => {
    dispatch({type: SMURFPOST, smurfs: response.data})
  })
}

export const deleteSmurf = (id) => dispatch => {
  dispatch({type: SMURFGETTING});
  axios.delete(`http://localhost:3333/smurfs/${id}`) 
  .then(response => {
    dispatch({type: SMURFDELETE, id})
  })
}

export const putSmurf = (id) => dispatch => {
  dispatch({type: SMURFGETTING});
}