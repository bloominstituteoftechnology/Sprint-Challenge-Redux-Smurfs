import axios from "axios";
import { smurfsFetchingActionCreator } from "./allActions";
export const DELETE_SMURF_ERROR = 'DELETE_SMURF';




const deleteSmurfActionCreator = (id) => {
            console.log('id', id);
    const deletedSmurf = axios.delete(`http://localhost:3333/smurfs/${id}`);
    return (dispatch) => {
        deletedSmurf.then(res => {
            console.log('r', res)
            dispatch(smurfsFetchingActionCreator())
        })
            .catch(error => {
                dispatch({
                    type: DELETE_SMURF_ERROR,
                    payload: "error in deleting"
                })
            })
    }
}
export default deleteSmurfActionCreator;