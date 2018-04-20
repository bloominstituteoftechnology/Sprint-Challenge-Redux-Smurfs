import axios from 'axios';
export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCHED_SMURF =  "FETCHED_SMURF";
export const ERROR_FETCHING = "ERROR_FETCHING";






const smurfsFetchingActionCreator = ()=>{
    const smurfs = axios.get('http://localhost:3333/smurfs')
return(dispatch)=>{
               dispatch({ type: FETCHING_SMURFS});
    smurfs.then( res =>{
        console.log('res',res)
               dispatch({ type: FETCHED_SMURF, payload:res.data })
    })
        .catch( error => {
        console.log('error,error')
                dispatch({ type: ERROR_FETCHING, payload: " fetching error " })
        })
}
    
}

export {smurfsFetchingActionCreator};