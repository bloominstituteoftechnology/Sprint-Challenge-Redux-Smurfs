import axios from "axios"


export const FETCHING = 'FETCHING';
export const GET_SMURFS = 'GET_SMURFS';
export const ERR = 'ERR';
export const ADDING = 'ADDING';
export const CREATE_SMURF = 'CREATE_SMURF'
export const TOGGLE_UPDATE_SMURF = 'TOGGLE_UPDATE_SMURF'
export const SINGLE_SMURF = 'SINGLE_SMURF'

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const getSmurfs = () => {
  const promise = axios.get('http://localhost:3333/smurfs')
  return dispatch => {
    dispatch({type: FETCHING})
    promise
    .then(({data}) => {
      console.log('RESPONSE', data)
      dispatch({type: GET_SMURFS, payload: data})
    })
    .catch(err => {
      dispatch({type: ERR, payload: err})
    })
  }
}

export const createSmurf = smurf => {
  const promise = axios.post('http://localhost:3333/smurfs', smurf)
  return dispatch => {
    dispatch({type: ADDING})
    promise
    .then(({data}) => {
      console.log('CREATE', data)
      dispatch({type: CREATE_SMURF, payload: data})
    })
    .catch(err => {
      dispatch({type: ERR, payload: err})
    })
  }
}

export const toggleShowUpdate = () => {
  return {
    type: TOGGLE_UPDATE_SMURF
  };
};

export const updateSingleSmurf = smurf => {
  return {
    type: SINGLE_SMURF,
    payload: smurf
  };
};
