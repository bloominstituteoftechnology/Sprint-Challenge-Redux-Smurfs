import axios from 'axios';

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const fetch = () => {
    return dispatch => {
        dispatch({ type: FETCHING });
        axios.get("http://localhost:3333/smurfs")
        .then(({data})   =>  {
            console.log("DATA:", data);
            dispatch({ type: SUCCESS, payload: data });
        })
        .catch(err  =>  {
            return dispatch({ type: FAILURE, payload: err })
        });
    }
}

export const addSmurf = (smurf) =>  {
    return dispatch =>  {
        dispatch({ type: FETCHING });
        axios.post("http://localhost:3333/smurfs", smurf)
        .then(({data})  =>  {
            dispatch({ type: SUCCESS, payload: data});
        })
        .catch(err  =>  {
            return dispatch({ type: FAILURE, payload: err })
        });
    }
}

export const removeSmurf = (id)    =>  {
    return dispatch =>  {
        dispatch({ type: FETCHING });
        axios.delete(`http://localhost:5000/api/friends/${id}`)
        .then(({data})  =>  {
            dispatch({ type: SUCCESS, payload: data});
        })
        .catch(err  =>  {
            return dispatch({ type: FAILURE, payload: err })
        });
    }
}
