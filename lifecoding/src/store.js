import { createStore } from 'redux';
const initialState = {
	mode: 'WELCOME',
	welcome_content: {
		title: 'WEB',
		desc:'Hello, WEB'
	},
	selected_content_id:1,
	contents: [
		{ id: 1, title: 'HTML', desc: 'HTML is ...' },
		{ id: 2, title: 'CSS', desc: 'CSS is ...' },
		{ id: 3, title: 'JS', desc: 'JS is ...' },
		
	]
}
const reducer = (state=initialState, action) => {
	return state;
}
export default createStore(reducer)