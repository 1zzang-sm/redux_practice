import {ActionTypes} from '../contants/action-types'

export const setProducts = (products) => {
	return {
		type: ActionTypes.SET_PRODUCTS,
		payload: products,
	}
}

export const selectedProduct = (product) => {
	return {
		typ: ActionTypes.SELECTED_PRODUCT,
		payload: product
	}
}