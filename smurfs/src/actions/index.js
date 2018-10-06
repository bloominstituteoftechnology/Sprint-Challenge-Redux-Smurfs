import axios from "axios";
export const GET = "GET";
export const UPDATE = "UPDATE";
export const DELETE = "DELETE";
export const FETCH = "FETCH";
export const ADD = "ADD";
export const ERROR = "ERROR";

const URL = "http://localhost:3333";

const handleGet = data => ({
	type: GET,
	data
});
const handleAdd = data => ({
	type: ADD,
	data
});
const handleDelete = id => ({
	type: DELETE,
	id
});
const handleFetch = () => ({
	type: FETCH
});
const handleError = data => ({
	type: ERROR,
	error: data
});

export const getSmurfs = () => {
	return dispatch => {
		dispatch(handleFetch());
		axios
			.get(URL + "/smurfs")
			.then(response => {
				dispatch(handleGet(response.data));
			})
			.catch(error => {
				error.response
					? dispatch(handleError(error.response.data))
					: dispatch(handleError(error.response));
			});
	};
};

export const addSmurfs = data => {
	return dispatch => {
		dispatch(handleFetch());
		axios
			.post(`${URL}/smurfs`, data)
			.then(response => {
				dispatch(handleAdd(response.data));
			})
			.catch(error => {
				error.response
					? dispatch(handleError(error.response.data))
					: dispatch(handleError(error.response));
			});
	};
};

export const deleteSmurfs = id => {
	return dispatch => {
		dispatch(handleFetch());
		axios
			.delete(`${URL}/smurfs/${id}`)
			.then(response => {
				dispatch(handleDelete(id));
			})
			.catch(error => {
				error.response
					? dispatch(handleError(error.response.data))
					: dispatch(handleError(error.response));
			});
	};
};
