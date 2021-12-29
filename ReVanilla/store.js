const redux = require('redux');
const createStore = redux.createStore;
const reduxLogger = require('redux-logger')
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
const combineReducers = redux.combineReducers
// console.log(redux)

// actions 
const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER' // type 정의
const ADD_VIEWCOUNT = 'ADD_VIEWCOUNT'
const addSubscriber = () => {
	return {
		type: ADD_SUBSCRIBER
	}
}
const addViewCount = () => {
	return {
		type: ADD_VIEWCOUNT
	}
}

// reducers
const subscriberState = {
	subscribers : 365
}
const subscriberReducer = (state=subscriberState, action) => {
	switch (action.type) {
		case ADD_SUBSCRIBER:
			return {
				...state,
				subscribers: state.subscribers + 1
			}
		default: return state
	}
}

const viewState = {
	viewCount : 100
}
const viewReducer = (state = viewState, action) => {
	switch (action.type) {
		case ADD_VIEWCOUNT:
			return {
				...state,
				viewCount : state.viewCount + 1
			}
		default: return state;
	}
}

const rootReducer = combineReducers({
	view: viewReducer,
	subscriber: subscriberReducer
})

// store
const store = createStore(rootReducer, applyMiddleware(logger));
console.log('store.getState: : ', store.getState())
// store.subscribe(() => {
// 	console.log('subscribe ==>>', store.getState())
// })
store.dispatch(addSubscriber())
store.dispatch(addSubscriber())
store.dispatch(addSubscriber())
store.dispatch(addSubscriber())
store.dispatch(addSubscriber())

store.dispatch(addViewCount())
store.dispatch(addViewCount())
// console.log('dispatch store.getState: : ', store.getState())
// subscribe