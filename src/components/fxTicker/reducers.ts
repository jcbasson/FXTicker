import {
  FETCH_CURRENCY_PRICE,
  FETCH_CURRENCY_PRICE_SUCCESS,
  FETCH_CURRENCY_PRICE_FAILURE,
} from './actions'
import {
  FETCH_CURRENCIES,
  FETCH_CURRENCIES_SUCCESS,
} from '../updateCurrenciesButton'
import {
  updateCurrencyFetchingStatus,
  updateCurrencyPrice,
  updateCurrencyFetchingError,
  updateAllCurrencyFetchingStatus,
  updateAllCurrencyPrices
} from './utils'
import _ from 'lodash'
import { ICurrencyExchanges, ICurrency } from './types';

const defaultState = {
  byId: {
    EURUSD: {
      id: 'EURUSD',
      from: 'EUR',
      to: 'USD',
      sell: { value: null, status: 'same' },
      buy: { value: null, status: 'same' },
      isFetching: false,
      error: null,
    },
    USDCHF: {
      id: 'USDCHF',
      from: 'USD',
      to: 'CHF',
      sell: { value: null, status: 'same' },
      buy: { value: null, status: 'same' },
      isFetching: false,
      error: null,
    },
    USDJPY: {
      id: 'USDJPY',
      from: 'USD',
      to: 'JPY',
      sell: { value: null, status: 'same' },
      buy: { value: null, status: 'same' },
      isFetching: false,
      error: null,
    },
  },
}

export const fxTickerReducer = (state = defaultState, action: any) => {
  const { currencyPairId } = action
  const currencyExchanges = _.get(state, `byId`) as ICurrency;

  switch (action.type) {
    case FETCH_CURRENCY_PRICE:
      return {
        byId: {
          ...currencyExchanges,
          [currencyPairId]: updateCurrencyFetchingStatus(
            currencyPairId,
            true,
            currencyExchanges
          ),
        },
      }
    case FETCH_CURRENCY_PRICE_SUCCESS:
      const { priceData } = action
      return {
        byId: {
          ...currencyExchanges,
          [currencyPairId]: updateCurrencyPrice(
            priceData,
            currencyPairId,
            currencyExchanges
          ),
        },
      }
    case FETCH_CURRENCY_PRICE_FAILURE:
      const { error } = action;
      return {
        byId: {
          ...currencyExchanges,
          [currencyPairId]: updateCurrencyFetchingError(
            currencyPairId,
            error,
            currencyExchanges
          ),
        },
      }
    case FETCH_CURRENCIES:
      return {
        byId: updateAllCurrencyFetchingStatus(currencyExchanges, true),
      }
    case FETCH_CURRENCIES_SUCCESS:
        const { currenciesData } = action
      return {
        byId: updateAllCurrencyPrices(currenciesData, currencyExchanges)
      }

    default:
      return state
  }
}
