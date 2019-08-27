import { call, put, select, takeLatest, take, race } from "redux-saga/effects";
import {
  FETCH_JOKE,
  FETCH_JOKE_SUCCESS,
  FETCH_JOKE_FAILURE,
  START_POLLING,
  STOP_POLLING
} from "./actions";
import axios from "axios";
import _ from "lodash";

const ENDPOINT = "http://localhost:3000/availableSlots";

const delay = (duration: number) => {
  const promise = new Promise(resolve => {
    setTimeout(() => resolve(true), duration);
  });
  return promise;
};

export const getJokes = (state: any) => _.get(state, "jokes.items");

function* fetchJokes(action: any) {
  while (true) {
    try {
      let previousJokes = yield select(getJokes);
      console.log("Jokes = ", previousJokes);
      const { data } = yield call(() => axios({ url: ENDPOINT }));
      yield put({ type: FETCH_JOKE_SUCCESS, data: data });
      yield call(delay, 5000);
    } catch (e) {
      yield put({ type: FETCH_JOKE_FAILURE, message: e.message });
    }
  }
}

export function* watchPollJokesSaga() {
  while (true) {
    const data = yield take(START_POLLING);
    yield race([call(fetchJokes, data), take(STOP_POLLING)]);
  }
}
