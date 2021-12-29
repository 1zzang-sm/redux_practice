import { ADD_VIEW } from './types'

const initialState = {
	count: 0
}
export const viewsReducer = (state=initialState, action) => {
	switch (action.type) {
		case ADD_VIEW:
			return {
				count: state.count + action.payload
			}
		default: return state
	}
}