import axios from 'axios';
import { ERROR_FETCHING, FETCHING_SMURFS} from './allActions';
import { smurfsFetchingActionCreator} from "./allActions";



const updateSmurfActionCreator = (obj)=>{ 
    console.log('up',obj);
  const  up = { id:obj.id, name:obj.name, age:obj.age, height: obj.height }
  const id = up.id
    const update = axios.put(`http://localhost:3333/smurfs/${id}`, up )
    return (dispatch)=>{
        dispatch({type:FETCHING_SMURFS});     
        update.then( res => { 
            console.log(res)
            dispatch(smurfsFetchingActionCreator())})
              .catch( error =>{
                  dispatch({
                      type: ERROR_FETCHING,
                      payload: 'error in update'
                  })
              })
}
}
export {updateSmurfActionCreator};