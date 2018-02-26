/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

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

// actionCreators
addSmurf
export const addFriend = (friend) => {
  const newFriend = axios.post('http://localhost:5000//api/friends/create', friend);
  console.log(newFriend)
  return dispatch => {
    dispatch({ type: SAVING_FRIENDS });
      newFriend
        .then(response => {
          console.log("is submit new friend working? : ", response)
          dispatch({ type: FRIENDS_SAVED, payload: response.data});
      })
        .catch(error => {
          dispatch({ type: ERROR_SAVING_FRIENDS, payload: error})
        })
  }
};
getSmurfs
export const getFriends = () => {
  const friends = axios.get('http://localhost:5000/api/friends/get');
  return dispatch => {
    dispatch({ type: FETCHING_FRIENDS });
    friends
      .then(response => {
        dispatch({ type: FRIENDS_FETCHED, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ERROR_FETCHING_FRIENDS, payload: error });
      });
  };
};

updateSmurf
deleteSmurf

//actionTypes

export default 