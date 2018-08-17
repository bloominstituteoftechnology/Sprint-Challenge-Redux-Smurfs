import axios from "axios";

export const GETTING_SMURFS = "GETTING_SMURFS";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";

export const ADDING_SMURF = "ADDING_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const MURDERING_SMURF = "MURDERING_SMURF";
export const MURDER_SMURF_SUCCESS = "MURDER_SMURF_SUCCESS";
export const MURDER_SMURF_FAILURE = "MURDER_SMURF_FAILURE";

export const EDITING_SMURF = "EDITING_SMURF";
export const EDIT_SMURF_SUCCESS = "EDIT_SMURF_SUCCESS";
export const EDIT_SMURF_FAILURE = "EDIT_SMURF_FAILURE";

const URL = "http://localhost:3333/smurfs";

export const getSmurfs = () => {
	const promise = axios.get(URL);
	return dispatch => {
		dispatch({ type: GETTING_SMURFS });
		promise
			.then(response => {
				dispatch({
					type: GET_SMURFS_SUCCESS,
					payload: response.data,
				});
			})
			.catch(err => {
				dispatch({
					type: GET_SMURFS_FAILURE,
					payload: err,
				});
			});
	};
};

export const addSmurf = data => {
	const promise = axios.post(URL, data);
	return dispatch => {
		dispatch({ type: ADDING_SMURF });
		promise
			.then(response => {
				dispatch({
					type: ADD_SMURF_SUCCESS,
					payload: response.data,
				});
			})
			.catch(err => {
				dispatch({
					type: ADD_SMURF_FAILURE,
					payload: err,
				});
			});
	};
};

export const murderSmurf = id => {
	const promise = axios.delete(`${URL}/${id}`);
	return dispatch => {
		dispatch({ type: MURDERING_SMURF });
		promise
			.then(response => {
				console.log(response);
				dispatch({
					type: MURDER_SMURF_SUCCESS,
					payload: response.data,
				});
			})
			.catch(err => {
				dispatch({
					type: MURDER_SMURF_FAILURE,
					payload: err,
				});
			});
	};
};

export const editSmurf = (id, data) => {
	const promise = axios.put(`${URL}/${id}`, data);
	return dispatch => {
		dispatch({ type: EDITING_SMURF });
		promise
			.then(response => {
				console.log(response);
				dispatch({
					type: EDIT_SMURF_SUCCESS,
					payload: response.data,
				});
			})
			.catch(err => {
				dispatch({
					type: EDIT_SMURF_FAILURE,
					payload: err,
				});
			});
	};
};
