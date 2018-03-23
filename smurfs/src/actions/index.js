/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from 'axios';
export const FETCHING = 'FETCHING';
export const SMURF_ADDED = 'SMURF_ADDED';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';


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

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING });

  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      console.log('reponse working', response)
      dispatch({ type: FETCHED, smurfs: response.data });
      console.log('smurfsUpdated', response)
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: 'Error fetching the data' });
    });
};

export const addSmurf = (smurf) => dispatch => {
  console.log('HELLLLLO')
  dispatch({ type: FETCHING });

  axios.post('http://localhost:3333/smurfs', smurf)
      .then(response => {
        console.log('addSmurf response', response)
        dispatch({ type: 'SMURF_ADDED', smurfs: response.data });
      })
      .catch(error => {
        dispatch({ type: 'ERROR', errorMessage: 'Error saving the data' });
  })
}

// server.post('/smurfs', (req, res) => {
//   const { name, age, height } = req.body;
//   const newSmurf = { name, age, height, id: smurfId };
//   if (!name || !age || !height) {
//     return sendUserError(
//       'Ya gone did smurfed! Name/Age/Height are all required to create a smurf in the smurf DB.',
//       res
//     );
//   }
//   const findSmurfByName = smurf => {
//     return smurf.name === name;
//   };
//   if (smurfs.find(findSmurfByName)) {
//     return sendUserError(
//       `Ya gone did smurfed! ${name} already exists in the smurf DB.`,
//       res
//     );
//   }

