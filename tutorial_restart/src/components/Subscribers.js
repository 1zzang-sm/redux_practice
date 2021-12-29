import React from 'react'
import { connect } from 'react-redux'
import {addSubscriber} from '../redux/subscribers/actions'

function Subscribers({count, addSubscriber}) {
	
	const onSubmitDispatch = () => {
		addSubscriber()
	}

	return (
		<div className="items">
			<h2>구독자 수 : {count}</h2>
			<button onClick={onSubmitDispatch}>구독하기</button>
		</div>
	)
}
const mapStateToProps = ({subscribers}) => {
	console.log(subscribers)
	return {
		count: subscribers.count
	}
}
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		addSubscriber: ()=> dispatch(addSubscriber())
// 	}
// }
const mapDispatchToProps = {
	addSubscriber
}
export default connect(mapStateToProps, mapDispatchToProps)(Subscribers)
