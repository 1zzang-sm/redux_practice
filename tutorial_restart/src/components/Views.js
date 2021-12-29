import React, {useState} from 'react'
import { connect } from 'react-redux'
import {addView} from '../redux/views/actions'

function Views({ count, addView }) {

	const [number, setNumber] = useState(1)
	const onClick = () => {
		addView(number)
	}
	const onChange = (e) => {
		setNumber(e.target.value)
	}
	return (
		<div>
			<p>조회수 : {count}</p>
			<input type="text" value={number} onChange={onChange} />
			<button onClick={onClick}>조회업</button>
		</div>
	)
}
const mapStateToProps = ({views}) => {
	return {
		count : views.count
	}
}
const mapDispatchToProps = {
	addView: (number)=> addView(number)
}

export default connect(mapStateToProps, mapDispatchToProps)(Views)
