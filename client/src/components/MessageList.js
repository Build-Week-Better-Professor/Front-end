import React, { useEffect } from 'react';
// import Messages from './Messages';
import { fetchList } from '../actions';
import { connect } from 'react-redux';


const MessageList = props => {
useEffect(() => {
props.fetchList()

},[]);
console.log('MSG DATA', props.data);
if(props.isFetching)
return <h2>Loading...</h2>
return (
<div>
 {props.data.length > 0 && props.data.map(items => (
  <Messages key={items.student_id} items={items}/> 
  ))} }
</div>
)
};

const mapStateToProps = state => {
return {
data: state.data,
isFetching: state.isFetching,
isPosting: state.isPosting,
error: state.error
 };
};
export default connect(mapStateToProps, { fetchList })(MessageList)