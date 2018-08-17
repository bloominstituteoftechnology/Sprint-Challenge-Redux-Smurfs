import axios from 'axios';
export const GETTING = 'GETTING';
export const GOT = 'GOT';
export const ADDING = 'ADDING';
export const ADDED = 'ADDED';
export const ERROR = 'ERROR';
export const DELETED = 'DELETED';
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

export const get = () => {
  return (dispatch) => {
    dispatch({type: GETTING});
    axios.get('http://localhost:3333/smurfs')
    .then((response) => {
      dispatch({type: GOT, payload: response.data});
    })
    .catch(error => {
        console.log(error);
      dispatch({type: ERROR});
    });
  };
};



export const add = (smurf) => {
  return (dispatch) => {
    dispatch({type: ADDING});
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(response => new Promise(resolve => {
        setTimeout(() => {
            resolve(dispatch({type: ADDED, payload: response.data}));
        }, 1000);
    })
)
     .catch(error => {
        console.log(error);
        dispatch({type: ERROR});
    });
};
};


export const deleteSmurf = (id) => {
  return(dispatch) => {
  axios.delete(`http://localhost:3333/smurfs/${id}`)
  .then((response) => {
      dispatch({type: DELETED, payload: response.data});
    }
  )
   .catch(error => {
        console.log(error);
      dispatch({type: ERROR});
    }
  );
  };
};



