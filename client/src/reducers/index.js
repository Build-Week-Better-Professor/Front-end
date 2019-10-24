import React from 'react';
import { FETCHING_DATA, FETCH_COMPLETE, FETCH_FAILURE, POSTING_DATA, POST_COMPLETE, POST_FAILURE } from '../actions'

const initialState = {
data: [
{
message: 'Please remember to submit your project before the deadline',
date: 10/24/2019,
student_id: 0
 }
],

isFetching: false,
error: '',
isPosting: false
}

const reducer = (state=initialState, action) => {
switch(action.type) {

 case FETCHING_DATA:
 return {
 ...state,
 isFetching: true,
 error: ''
 }
 
 case FETCH_COMPLETE: 
 return {
 ...state,
 isFetching: false,
 error: '',
 data: action.payload
 }

 case FETCH_FAILURE:
 return {
...state,
error: action.payload,
isFetching: false
 }

 case POSTING_DATA:
 return {
...state,
data: action.payload,
isPosting: true, 
error: ''
 }

 case POST_COMPLETE:
 return {
 ...state,
 isPosting: false,
 error: ''
 }

 case POST_FAILURE:
 return {
...state,
error: action.payload,
isPosting: false
 }
  
 default:
 return state
}
}
export default reducer;
