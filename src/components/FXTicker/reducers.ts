import {FETCH_JOKE, FETCH_JOKE_SUCCESS, FETCH_JOKE_FAILURE, START_POLLING, STOP_POLLING } from './actions';

const defaultStateList = {
  isFetching: false,
  items:[],
  error:{},
  isPolling: false,
};

export const jokeReducer = (state = defaultStateList, action: any) => {
  switch (action.type){
  case FETCH_JOKE:
    return {...state, isFetching:true};
  case FETCH_JOKE_SUCCESS:
    return {...state, isFetching:false, items:action.data};
  case FETCH_JOKE_FAILURE:
    return {...state, isFetching:false, error:action.data};
  case START_POLLING:
    return {...state, isPolling: true};
  case STOP_POLLING:
    return {...state, isPolling: false};
  default:
    return state;
  }
};