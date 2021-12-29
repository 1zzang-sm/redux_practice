import { FETCH_COMMENTS, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAIL } from './types'

const initialState = {
	items: [],
	loading: false,
	error: null
}

export const commentsReducer = (state=initialState, action) => {
	switch (action.type) {
		case FETCH_COMMENTS_REQUEST:
			return {
				...state,
				loading: true,
			}
		case FETCH_COMMENTS_SUCCESS:
			return {
				...state,
				lading: false,
				items: action.payload
			}
		case FETCH_COMMENTS_FAIL:
			return {
				...state,
				lading: false,
				error: action.payload
			}
		default: return state
	}
}