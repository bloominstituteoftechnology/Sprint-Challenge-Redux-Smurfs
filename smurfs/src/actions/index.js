import axios from 'axios';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const DELETING = 'DELETING';
export const ERROR = 'ERROR';

export const fetchSmurfs = () => {
  return(dispatch => {
    dispatch({type: FETCHING});
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
	dispatch({type: FETCHED, payload: response.data });
      })
      .catch((error) => {
	dispatch({type: ERROR, payload: 'Error'});
      });
  }
);
};

export const addSmurf = smurf => {
  return(dispatch => {
    dispatch ({type: FETCHING });
    axios.post('http://localhost:3333/smurfs', smurf)
      .then(response => {
	dispatch({type: FETCHED, payload: response.data});
      })
      .catch((error) => {
	dispatch({type: ERROR, payload: "Error"});
      });
  }
);
};

export const updateSmurf = (smurf) => {
  return dispatch => {
    dispatch ({type: FETCHING});
    axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
      .then(response => {
	dispatch(fetchSmurfs());
      })
     .catch((err) => {
	dispatch({type: ERROR, payload: "Error"});
      });
  };
};

export const deleteSmurf = id => {
  return(dispatch => {
    dispatch({type: DELETING});
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then((response) => {
	dispatch(fetchSmurfs());
      })
      .catch((err) => {
	dispatch({type: ERROR, payload: "Error"});
      });
  }
);
};
	 

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


