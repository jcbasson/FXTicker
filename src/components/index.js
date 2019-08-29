import { App } from './app'
import { defaultStore } from './state'
import { fxTickerReducer } from './fxTicker';

const reducers = {
  currencyExchanges: fxTickerReducer,
}
export { App, reducers, defaultStore }
