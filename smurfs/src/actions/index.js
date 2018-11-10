/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios'
export const GET_SMURFS = "GET_SMURFS"
export const LOADING = "LOADING"
export const ERROR = "ERROR"

export const getSmurfs = () => {
  return (dispatch) => {
    dispatch({type: LOADING})
    axios.get('http://localhost:3333/smurfs')
      .then( response => {
        dispatch({type: GET_SMURFS, smurfs: response.data})
      })
      .catch( err => {
        dispatch({type: ERROR, errorMessage: "Gargamel got all the smurfs!"})
      })
  }
}

export const createSmurf = (newSmurf) => {
  return (dispatch) => {
    dispatch({type: LOADING})
    axios.post('http://localhost:3333/smurfs', newSmurf)
      .then( response => {

        dispatch({type: GET_SMURFS, smurfs: response.data})
      })
      .catch( err => {
        dispatch({type: ERROR, errorMessage: "Trouble making smurfs..."})
      })
  }
}

export const deleteSmurf = (id) => {
  return (dispatch) => {
    dispatch({type: LOADING})
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then( response => {
        dispatch({ type: GET_SMURFS, smurfs: response.data })
      })
      .catch( err => {
        dispatch({type: ERROR, errorMessage: "Smurfs are hard to get rid of, try again."})
      })

  }
}
//
// export const updateSmurf = (updatedAvenger) => {
//   return (dispatch) => {
//     dispatch({type: LOADING})
//     axios.put(`http://localhost:3333/smurfs/${updatedSmurf.id}`, updatedSmurf)
//       .then( response => {
//         dispatch({ type: GET_Smurf, Smurfs: response.data})
//       })
//       .catch( err => {
//         dispatch({type: ERROR, errorMessage: "Its hard changing a smurf"})
//       } )
//   }
// }


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
