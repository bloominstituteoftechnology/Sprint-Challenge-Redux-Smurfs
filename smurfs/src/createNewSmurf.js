import axios from "axios";
import { FETCHING_SMURFS, FETCHED_SMURF, ERROR_FETCHING } from './allActions';
import {smurfsFetchingActionCreator} from './allActions';


const createNewSmurfActionCreator = (smurf) => {
    console.log('p', smurf)   
const newSmurf = axios.post('http://localhost:3333/smurfs/', smurf)
    return (dispatch) => {
        newSmurf.then(res => {
               dispatch(smurfsFetchingActionCreator())}
        )
            .catch(error => {
                dispatch({
                    type: ERROR_FETCHING,
                    payload: " error in adding new Smurf"
                })
            })
    }
}
export {createNewSmurfActionCreator};