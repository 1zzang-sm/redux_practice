import { createStore } from 'redux'
import { rootReducer } from './rootReducer'
import logger from 'redux-logger'
import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const middleware = [logger, thunk]

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

