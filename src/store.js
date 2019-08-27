import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import { defaultStore, rootSaga } from './components'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const middlewareEnhancer = applyMiddleware(sagaMiddleware);

const enhancers = [middlewareEnhancer]

const composedEnhancers = composeWithDevTools(...enhancers)

const store = createStore(rootReducer, defaultStore, composedEnhancers)

sagaMiddleware.run(rootSaga);

export default store
