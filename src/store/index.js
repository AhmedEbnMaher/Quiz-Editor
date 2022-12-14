

import { createStore, applyMiddleware, compose } from 'redux'
import Thunk from 'redux-thunk'

import rootReducer from './reducers'

export const middlewares = [Thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))

export default store
