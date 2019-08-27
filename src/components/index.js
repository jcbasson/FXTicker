import { all } from 'redux-saga/effects'
import { App } from './app'
import { defaultStore } from './state'
import { watchPollJokesSaga, jokeReducer } from './FXTicker';

export default function* rootSaga() {
  yield all([watchPollJokesSaga()])
}

const reducers = {
  jokes: jokeReducer,
}
export { App, reducers, defaultStore, rootSaga }
