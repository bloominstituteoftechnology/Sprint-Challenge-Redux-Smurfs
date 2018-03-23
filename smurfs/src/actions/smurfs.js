import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';

function addSmurf (smurf) {
  return {
    type: ADD_SMURF,
    smurf,
  }
}

export function handleAddSmurf (name, cb) {
  return (dispatch) => {
    return axios.post('http://localhost:3333/smurfs')
      .then((smurf) => {
        dispatch(addSmurf(smurf))
        cb()
      })
      .catch(() => alert('Error.'))
  }
}

// post is failing because we need to pass it the smurf object in proper format
// currently we don't have that set up