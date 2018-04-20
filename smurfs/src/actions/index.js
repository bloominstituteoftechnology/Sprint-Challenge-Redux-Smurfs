import { get } from 'axios'

export const FETCHING_SMURFS = 'FETCHING_SMURFS'
export const SMURFS_FETCHED = 'SMURFS_FETCHED'
export const ADDING_SMURF = 'ADDING_SMURF'
export const SMURF_ADDED = 'SMURF_ADDED'
export const ERROR = 'ERROR'

const ApiUrl = 'http://localhost:3333/smurfs'

export const fetchSmurfs = () => async dispatch => {
  await dispatch({ type: FETCHING_SMURFS })
  try {
    const { data } = await get(ApiUrl)
    await dispatch({ type: SMURFS_FETCHED, payload: data })
  } catch (error) {
    await dispatch({
      type: ERROR,
      payload: 'Can not fetch smurfs from their village'
    })
    await console.log('error', error)
  }
}
