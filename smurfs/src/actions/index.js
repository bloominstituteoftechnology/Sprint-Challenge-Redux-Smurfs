import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_DATA';
export const SMURFS_FETCHED = 'DATA_FETCHED';
export const FETCHING_ERROR = 'FETCHING_ERROR';
export const ADDING_SMURF = 'ADDING_SMURF';
export const FETCH_SINGLE_SMURF = 'FETCH_SINGLE_SMURF';

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
export const fetchData = () => {
  const request = axios.get('http://localhost:3333/smurfs');
  return (dispatch) => {
    dispatch({type: FETCHING_SMURFS});
    
    request.then(res => {
      dispatch({
        type: SMURFS_FETCHED,
        payload: res.data 
      })
    })
    .catch(error => console.log(error));
  }
}

export const addSmurf = (smurf) => {
  const post = axios.post('http://localhost:3333/smurfs', smurf);
  return (dispatch) => {
    post.then(res => {
      dispatch({
      type: ADDING_SMURF,
      payload: res.data
    })}
  ).catch(error => console.log(error))};
}

export const fetchSingleSmurf = id => {
  const request = axios.get('http://localhost:3333/smurfs');
  return (dispatch) => {
    request.then(res => {
      dispatch({
        type: FETCH_SINGLE_SMURF,
        payload: res.data.filter(smurf => smurf.id === id)
      })
    })
  }
}

    // axios.post('http://localhost:3333/smurfs', {...this.state})
    // .then(this.setState({
    //   name: '',
    //   age: '',
    //   height: ''
    // }))
    // .then(window.location.reload());
