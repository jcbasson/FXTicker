import { combineReducers } from 'redux'
import { reducers, defaultStore } from './components'

const rootReducer = combineReducers(
  reducers,
  defaultStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default rootReducer
