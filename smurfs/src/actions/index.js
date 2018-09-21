import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const GETTING = 'GETTING';
export const GOT = 'GOT';
export const ERR="ERR";
export const POST='POST';
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

export const get = (smurfs) => {
	return dispatch=> {
dispatch({type:GETTING});
	axios.get(`http://localhost:3333/smurfs`)
		.then(({data}) => {
			dispatch({type:GOT,payload:data});
		})
		.catch(err => {
			dispatch({type:ERR});
		});
	};
};

export const post = (smurf) => {
return dispatch=>{
	axios.post(`http://localhost:3333/smurfs`,
	{
	name:smurf.name,
	age:smurf.age,
	height:smurf.height
	})
	.then(res => {
	dispatch({type:GOT,payload:res.data});
	})
	.catch(err => {
			dispatch({type:ERR});
		});
	};
}