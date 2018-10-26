import axios from 'axios'
import {
  FETCHINGSMURFS,
  SMURFSFETCHED,
  ERROR
} from './index'

export const getSmurfs = smurfs => dispatch => {
  dispatch({ type: FETCHINGSMURFS })

  axios
    .get('http://localhost:3333/smurfs')
    .then( data => {
      console.log('get', data.data)
      dispatch({ type: SMURFSFETCHED, data: data.data})
    })
    .catch(err => {
      dispatch({ type: ERROR })
    })

}