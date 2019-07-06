/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/



import axios from 'axios';
export const FETCH_SMURF ='FETCH_SMURF'
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS'
export const FETCH_SMURF_ERROR = 'FETCH_SMURF_ERROR'

export const ADD_SMURF ='ADD_SMURF'
export const UPDATE_SMURF = 'UPDATE_SMURF'
export const DELETE_SMURF = 'DELETE_SMURF'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE'

 


export const fetchSmurfs = ()=>{
  const promise = axios.get ('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({type: FETCH_SMURF});
    promise
    .then(res=> {
      dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err => {
      console.log(err);
      dispatch({type:FETCH_SMURF_ERROR});
    })
  }
}
export const addSmurf = newSmurf => dispatch =>{
  dispatch({type: ADD_SMURF})
    console.log(newSmurf)
 axios.post('http://localhost:3333/smurfs', newSmurf)
 .then(res =>{
   dispatch({type: ADD_SMURF_SUCCESS, payload: res.data})
 })
 .catch(err => {
   dispatch({ type: ADD_SMURF_FAILURE, payload: err})
 })
  
      
  }

// export const addSmurf = newSmurf => {
//  const addPromise =  axios
//   .post ('http://localhost:3000/smurfs', newSmurf);
//   return dispatch => {
//     dispatch({ type: ADD_SMURF});
//     addPromise
//   .then(res => {
//    dispatch({type: ADD_SMURF_SUCCESS, payload: res.data})
//   })
//   .catch(err => {
//     console.log(err);
//    })
// }
// }
// export function addSmurf (name,age,height){
//   console.log('888',name,age,height)
//   return {
//     type: ADD_SMURF,
//     payload: {name: '', age: '', height: ''}
//   }
// }
   
  



// export const addSmurfs = () => dispatch => {
//     dispatch({type: FETCH_SMURF})
    
//     axios
//     .get('http://localhost:3333/smurfs')
//     .then (res => {
//       const smurfs = res.data
//       // this.setState ({smurfs })
      
//       console.log( '777',res.data)
//       dispatch({type: ADD_SMURF, payload: res.data})
//     })
//     .catch(err => console.log (err))







// export const postSmurf = newSmurf => {
//   axios
//   .post('http://localhost:3000/smurfs', newSmurf)
//   .then(res => {
//     const smurfs = res.data
//     this.setState({smurfs})
//   })
//   .catch(err => console.log(err))
// }
// export const postSmurfs = ({name, age, height}) => { 
//      return (dispatch) =>{
//         axios.post('http://localhost:3000', {name,age, height})
//        .then(res => {
//          dispatch (res.data)
//        })
//        .catch(err => {
//          console.log(err)
//        })
//      }

// }  

 

// export const postSmurf = ()=> dispatch => {
//   dispatch({type: ADD_SMURF})
//   axios.post('http://localhost:3000',newSmurf)
//   .then(res=> {
//     dispatch({type: UPDATE_SMURF, payload: res.data})
//     })
//     .catch(err => console.log (err))
   
//   }  

  


 