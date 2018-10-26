import axios from 'axios';

import { FETCH_SMURFS } from './types';

export const fetchSmurfs = () => async dispatch => {
  const res = await axios.get('http://localhost:3333/smurfs');
  dispatch({ type: FETCH_SMURFS, payload: res.data });
};
