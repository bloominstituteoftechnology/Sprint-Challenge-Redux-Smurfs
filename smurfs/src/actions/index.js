import axios from 'axios';

export const LOADING = 'LOADING'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'
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
export const fetchSmurfs = () =>{
  return dispatch=>{
    dispatch({ type: LOADING, payload: `Hold tight we trying to grab those slippery buggers....`});
    axios
      .get('http://localhost:3333/smurfs')
      .then(response =>{
        dispatch({ type: SUCCESS, payload: response.data })
      })
      .catch(err =>{
        dispatch({ type:FAILURE, payload:'Error fetching Smurfs'})
      })
  }
}
export const addSmurf = (newSmurf) =>{
 return dispatch=>{
   dispatch({ type: LOADING, payload: 'adding new Smurf...'})
   axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(response=>{
        dispatch({ type: SUCCESS, payload: response.data })
      })
      .catch(err=>{
        dispatch({ type: FAILURE, payload: 'Error creating new Smurf'})
      })

 }
}
export const deleteSmurf = (id) =>{
  return dispatch=>{
    dispatch({ type: LOADING, payload: 'Bye Felica!'})
    axios
       .delete(`http://localhost:3333/smurfs/${id}`)
       .then(response=>{
         dispatch({ type: SUCCESS, payload: response.data })
       })
       .catch(err=>{
         dispatch({ type: FAILURE, payload: 'This smurf wont leave'})
       })
  }
}