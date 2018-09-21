/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const SMF_FTH_IP = "SMF_FTH_IP";
export const SMF_FTH_SCS = "SMF_FTH_SCS";
export const SMF_FTH_FLR = "SMF_FTH_FLR";
export const SMF_SV_IP = "SMF_SV_IP";
export const SMF_SV_SCS = "SMF_SV_SCS";
export const SMF_SV_FLR = "SMF_SV_FLR";

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
export const smfFth = () => dispatch => {
  dispatch({ type: SMF_FTH_IP });
  axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        dispatch({
          type: SMF_FTH_SCS,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: SMF_FTH_FLR,
          payload: err
        });
      });
}

export const smfSv = smf_idv => dispatch => {
  dispatch({ type: SMF_SV_IP });
  axios
      .post("http://localhost:3333/smurfs", smf_idv)
      .then(response => {
        dispatch({
          type: SMF_SV_SCS,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: SMF_SV_FLR,
          payload: err
        });
      });
}
