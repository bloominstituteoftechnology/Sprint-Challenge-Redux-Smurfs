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
import axios from 'axios';

export const addSmurf = smurf => {
  return dispatch => {
    dispatch({ type: 'ADDING_SMURF' });
    axios.post('http://localhost:3333/smurfs', smurf)
      .then(({ data }) => {
        dispatch({ type: 'ADD_SMURF', payload: data });
      })
      .catch(err => {
        dispatch({ type: 'ERROR', payload: err });
      });
  };
};
export const getSmurfs = () => {
       return dispatch => {
           dispatch({ type: 'IS_FETCHING' });
           axios.get('http://localhost:3333/smurfs')
             .then(({data}) => {
                 dispatch({ type: 'SMURFS_FETCHED', payload: data });
                })
             .catch(err => {
                dispatch({ type: 'ERROR', payload: err });
        });
    };
};
export const deleteSmurf = (id) => {
  return dispatch => {
    dispatch({ type: 'DELETING_SMURF' });
    axios.delete('http://localhost:3333/smurfs' + `/${id}`, id)
      .then(({ data }) => {
        dispatch({ type: 'DELETE_SMURF', payload: data });
      })
      .catch(err => {
        dispatch({ type: 'ERROR', payload: err });
      });
  };
};
