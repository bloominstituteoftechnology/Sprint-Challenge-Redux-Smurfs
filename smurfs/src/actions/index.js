import axios from 'axios'; 

export const getSmurfs = () => {
  const request = axios.get('http://localhost:3333/smurfs'); 
  return (dispatch) => {
    dispatch({type: "FETCHING_DATA"})
    request.then(({data}) => {
      dispatch({type: 'DATA_FETCHED', payload: data}); 
    }).catch((err) => {
      dispatch({type: "ERROR", payload: err})
    })
  }
}

export const addSmurf = (newSmurf) => {
  const request = axios.post('http://localhost:3333/smurfs', newSmurf); 
  return (dispatch) => {
    dispatch({type: "SAVING_DATA"})
    request.then(({data}) => {
      dispatch({type: 'DATA_SAVED', payload: data})
    }).catch((err) => {
      dispatch({type: "ERROR", payload: err})
    })
  }}