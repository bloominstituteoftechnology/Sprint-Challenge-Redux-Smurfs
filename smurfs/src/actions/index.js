
import axios from 'axios';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURFS_FETECHED = 'SMURFS_FETECHED';
export const ERROR = 'ERROR';



export const fetchSmurfs = () => {
  const getSmurfs = axios.get('http://localhost:3333/smurfs'); 
    return function (dispatch) {
      dispatch ({ type: FETCHING_SMURFS, payload: true})
      getSmurfs
        .then( data => {
          console.log(data);
          dispatch({ type: SMURFS_FETECHED, payload: data.data })
        })
          .catch(err => {
            console.log(err);
            dispatch({ type: ERROR, payload: true})
          })
    }
}