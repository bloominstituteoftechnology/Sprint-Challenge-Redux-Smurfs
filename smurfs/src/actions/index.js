/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

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
import axios from "axios";

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const SMURFS_FETCHED = "SMURFS_FETCHED";
export const DELETING_SMURF = "DELETING_SMURF";
export const SMURF_DELETED = "SMURF_DELETED";
export const UPDATING_SMURF = "UPDATING_SMURF";
export const SMURF_UPDATED = "SMURF_UPDATED";
export const SAVING_SMURFS = "SAVING_SMURFS";
export const SMURFS_SAVED = "SMURFS_SAVED";

export const ERROR = "ERROR";
export const fetchSmurf = () => {
    const promise = axios.get(`http://localhost:3333/smurfs`);
    return dispatch => {
      // res.json();
      
      dispatch({ type: FETCHING_SMURFS }); // first state of 'fetching' is dispatched !!!<<< fetchingFriends >>>!!!
      promise
        .then(response => {
          console.log('FETCH RESPONSE:',response);
          dispatch({ type: SMURFS_FETCHED, payload: response.data }); // 2nd state of success is dispatched IF the promise resolves
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: ERROR, payload: 'Error with fetchSmurf action' }); // our other 2nd state of 'rejected' will be dispatched here.
        });
    };
  };
  export const deleteSmurf = (SmurfID) => { //DELETING_SMURF SMURF_DELETED 
    const promise = axios.delete(`http://localhost:3333/smurfs/${SmurfID}`);
    return dispatch => {
      // res.json();
      
      dispatch({ type: DELETING_SMURF }); // first state of 'fetching' is dispatched !!!<<< friendDeleted >>>!!!
      promise
        .then(response => {
          console.log('DELETE RESPONSE:',response);
          dispatch({ type: SMURF_DELETED, payload: response.data }); // 2nd state of success is dispatched IF the promise resolves
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: ERROR, payload: 'Error with deleteSmurf action' }); // our other 2nd state of 'rejected' will be dispatched here.
        });
    };
  };
  export const updateSmurf = (SmurfID, dataObject) => { //UPDATING_SMURF SMURF_UPDATED
    // const friend = { name: this.state.Name, email: this.state.Email, age: this.state.Age };
    console.log('UPDATING, PUT, UPDATING UPDATING, ID & DATA:',SmurfID,dataObject);
    const promise = axios.put(`http://localhost:3333/smurfs/${SmurfID}`, dataObject);
    return dispatch => {
      // res.json();
      
      dispatch({ type: UPDATING_SMURF }); // first state of 'fetching' is dispatched !!!<<< friendUpdated >>>!!!
      promise
        .then(response => {
          console.log('UPDATE RESPONSE:',response);
         // dispatch({type: SMURF_UPDATED, payload: fetchSmurf()});
          
         dispatch({ type: SMURF_UPDATED, payload: response.data }); // 2nd state of success is dispatched IF the promise resolves
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: ERROR, payload: 'Error with updateSmurf action' }); // our other 2nd state of 'rejected' will be dispatched here.
        });
    };
  };
  export const saveSmurf = (dataObject) => { 
    const promise = axios.post(`http://localhost:3333/smurfs/`, dataObject);
    return dispatch => {
      // res.json();
      
      dispatch({ type: SAVING_SMURFS }); // first state of 'fetching' is dispatched !!!<<< savingFriends >>>!!!
      promise
        .then(response => {
          
          console.log('SAVED RESPONSE:',response);
        dispatch({ type: SMURFS_SAVED, payload: response.data }); // 2nd state of success is dispatched IF the promise resolves
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: ERROR, payload: 'Error with saveSmurf action' }); // our other 2nd state of 'rejected' will be dispatched here.
        });
    };
  };
// deleteSmurf = (SmurfID) => {
//   axios
//     .delete(`http://localhost:3333/smurfs/${SmurfID}`)
//     .then((response) => {
//       this.props.getAJAX();
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
// updateSmurf = (SmurfID) => {
//   const smurf = { name: this.state.Name, height: this.state.Height, age: this.state.Age};
//       console.log('update smurf',smurf)
//       axios
//     .put(`http://localhost:3333/smurfs/${SmurfID}`, smurf)
//     .then((response) => {
//       this.props.getAJAX();
//       this.setState({
//         showUpdateForm: false,
//         Name: '',
//         Age: '',
//         Height: ''
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
// getAJAX = () => {
//   axios
//     .get(`http://localhost:3333/smurfs/`)
//     .then((response) => {
//       this.setState({ lists: response.data });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
// showUpdateForm = () => {
//   this.setState({ showUpdateForm: !this.state.showUpdateForm });
// };


// addSmurf = event => {
//   event.preventDefault();
//   // add code to create the smurf using the api
//   const list = { name: this.state.name, height: this.state.height, age: this.state.age };
//   axios
//     .post(`http://localhost:3333/smurfs/`, list)
//     .then((savedList) => {
//       console.log(savedList);
//       this.setState({ lists: savedList.data });
//       this.getAJAX();
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   this.setState({
//     name: '',
//     age: '',
//     height: ''
//   });
// }