export const FETCH_JOKE = 'FETCH_JOKE';
export const FETCH_JOKE_SUCCESS = 'FETCH_JOKE_SUCCESS';
export const FETCH_JOKE_FAILURE = 'FETCH_JOKE_FAILURE';
export const START_POLLING = 'START_POLLING';
export const STOP_POLLING = 'STOP_POLLING';

export const startPolling = () => {
      return {
        type: START_POLLING
      };
    }

export const stopPolling = () => {
      return {
        type: STOP_POLLING
      };
    }

export const fetchJoke = () => {
  return {
    type: FETCH_JOKE
  };
}

export const fetchJokeSuccess = (data: any) => {
  return {
    type: FETCH_JOKE_SUCCESS,
    data
  };
}

export const fetchJokeFail = (error: any) => {
  return {
    type: FETCH_JOKE_FAILURE,
    error
  };
}