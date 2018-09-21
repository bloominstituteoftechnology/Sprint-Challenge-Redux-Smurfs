import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ERROR = 'ERROR';

export const fetchSmurfs = ()=> {
    return dispatch=> {
        dispatch({type: FETCHING_SMURFS});
        axios
            .get('http://localhost:3333/smurfs')
            .then(response=> {
                console.log(response);
                dispatch({type: FETCHED_SMURFS, payload: response.data});
            })
            .catch(err=> {
                console.log(err);
                dispatch: ({type: ERROR, payload: err});
            });
    };
};

export const addSmurf = (smurf)=> {
    return dispatch=> {
        axios.post('http://localhost:3333/smurfs', {
            name: '',
            age: '',
            height: '',
        })
            .then(response=> {
                console.log(response);
                dispatch({type: ADDING_SMURF, payload: response.data});
            })
            .catch(err=> {
                console.log(err);
            });
    };
};
