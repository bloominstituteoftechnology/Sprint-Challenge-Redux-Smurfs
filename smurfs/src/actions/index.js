import { fetchSmurfs } from './crud/getSmurfs';
import { addSmurf } from './crud/addSmurf';
import { deleteSmurf } from './crud/deleteSmurf';
import { updateSmurf } from './crud/updateSmurf';
import { updateName, updateAge, updateHeight, resetInput } from './formInput';

export {
  fetchSmurfs,
  addSmurf,
  deleteSmurf,
  updateSmurf,
  updateName,
  updateAge,
  updateHeight,
  resetInput
}

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