import {ABC_COUNT} from '../actions/type'
const initialState = {
	count : 120
}

export const countReducer = (state=initialState, action) => {
	switch (action.type) {
		case ABC_COUNT:
			return {
				...state,
				count : state.count + 1 
			}
		default : return state
	}
}