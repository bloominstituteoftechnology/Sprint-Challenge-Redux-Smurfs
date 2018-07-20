import axios from 'axios';

export const getSmurfs = () => {
	return dispatch => {
		dispatch({ type:'GETTING_SMURFS' });
		axios.get('http://localhost:3333/smurfs')
			.then( ({data}) => {
			dispatch ({ type:'GOT_SMURFS',payload:data });
			})
			.catch( err => {
			dispatch ({ type:'ERROR',payload:err });
			});
	};
};

export const addSmurf = (smurf) => {
  return (dispatch) => {
    dispatch({ type: 'ADDING_SMURF' });
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(
        ({ data }) =>
          dispatch({ type: 'ADDED_SMURF', payload: { name: smurf.name, age: smurf.age, email: smurf.email } })
      )
      .catch((error) => {
        dispatch({ type: 'ERROR', msg: 'error saving friend' });
      });
  };
};