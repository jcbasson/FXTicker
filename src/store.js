import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import { defaultStore } from './components'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const middlewareEnhancer = applyMiddleware(thunk)

const enhancers = [middlewareEnhancer]

const composedEnhancers = composeWithDevTools(...enhancers)

const store = createStore(rootReducer, defaultStore, composedEnhancers)

export default store
