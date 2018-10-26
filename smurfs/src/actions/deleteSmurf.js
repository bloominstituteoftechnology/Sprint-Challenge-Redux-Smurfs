import axios from 'axios'
import {
  FETCHINGSMURFS,
  DELETINGSMURF,
  ERROR
} from './index'

export const deleteSmurf = smurf => dispatch => {
  dispatch({ type: FETCHINGSMURFS })

  axios
    .delete('http://localhost:3333/smurfs/' + smurf.id)
    .then( data => {
      console.log('get', data.data)
      dispatch({ type: DELETINGSMURF, data: data.data})
    })
    .catch(err => {
      dispatch({ type: ERROR })
    })

}