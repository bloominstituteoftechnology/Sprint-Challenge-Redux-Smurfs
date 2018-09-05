import axios from 'axios';
export const CREATING = 'CREATING';
export const READING = 'READING';
export const UPDATING = 'UPDATING';
export const DELETING = 'DELETING';

export const CREATE = 'CREATE';
export const READ = 'READ';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';
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




export const create = (data) =>{ 
    const postData = axios.post(`http://localhost:3333/smurfs`,{
        name: data.name,
        age: data.age,
        height: data.height,
    });
    return function(dispatch) {
    dispatch({ type: CREATING });
    postData
      .then(response => {
        dispatch({ type: CREATE, payload: response.data });
      })
        .catch(error => {
        console.error(error);
        });
      }
  }




export const read = () => {
  const getData = axios.get('http://localhost:3333/smurfs');
  return function(dispatch) {
    dispatch({ type: READING });
    getData
      .then(response => {
        dispatch({ type: READ, payload: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};



export const update = (data) => {
  const postData = axios.put(`http://localhost:3333/smurfs/${data.id}`,{
        name: data.name,
        age: data.age,
        height: data.height,
    })
    return function(dispatch) {
    dispatch({ type: UPDATING });
    postData
      .then(response => {
        dispatch({ type: UPDATE, payload: response.data });
      })
        .catch(error => {
          console.error(error);
        });
  }
}