import axios from 'axios'
import {
  FETCHINGSMURFS,
  ADDINGSMURF,
  ERROR
} from './index'

export const createSmurf = smurf => dispatch => {
  dispatch({ type: FETCHINGSMURFS })

  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then( data => {
      console.log('get', data.data)
      dispatch({ type: ADDINGSMURF, data: data.data})
    })
    .catch(err => {
      dispatch({ type: ERROR })
    })

}