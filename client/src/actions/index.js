import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCH_COMPLETE = 'FETCH_COMPLETE';
export const FETCH_FAILURE = 'FETCH_FAILURE';


export const fetchList = () => dispatch => {
  dispatch({ type: FETCHING_DATA })
axiosWithAuth()
.get(`/students/user/1`)
// .then(res => console.log('RES',res))
.then(res => {console.log('RES',res); 
dispatch({ type: FETCH_COMPLETE, payload: res.data})})
.catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response}))

}

export const POSTING_DATA = 'POSTING_DATA';
export const POST_COMPLETE = 'POST_COMPLETE';
export const POST_FAILURE =  'POST_FAILURE';

export const postList = (student) => dispatch => {
    dispatch({ type: POSTING_DATA })

    axiosWithAuth()
    .post('/students', student)
    // .then(res => console.log(res))
.then(res => dispatch({ type: POST_COMPLETE, payload: res.data}))
.catch(err => dispatch({ type: POST_FAILURE, payload: err.response}))

}