import {
  FETCH_CURRENCY_PRICE,
  FETCH_CURRENCY_PRICE_SUCCESS,
  FETCH_CURRENCY_PRICE_FAILURE
} from "./actions";
import { updateCurrencyFetchingStatus, updateCurrencyPrice, updateCurrencyFetchingError } from "./utils";
import _ from "lodash";

const defaultState = {
  byId: {
    EURUSD: {
      id: "EURUSD",
      from: "EUR",
      to: "USD",
      sell: { value: null, status: "same" },
      buy: { value: null, status: "same" },
      isFetching: false,
      error: null
    },
    USDCHF: {
      id: "USDCHF",
      from: "USD",
      to: "CHF",
      sell: { value: null, status: "same" },
      buy: { value: null, status: "same" },
      isFetching: false,
      error: null
    },
    USDJPY: {
      id: "USDJPY",
      from: "USD",
      to: "JPY",
      sell: { value: null, status: "same" },
      buy: { value: null, status: "same" },
      isFetching: false,
      error: null
    }
  }
};

export const fxTickerReducer = (state = defaultState, action: any) => {
  const { currencyPairId } = action;
  const currencyExchanges = _.get(state, `byId`);

  switch (action.type) {
    case FETCH_CURRENCY_PRICE:
      return {
        byId: {
          ...currencyExchanges,
          [currencyPairId]: updateCurrencyFetchingStatus(
            currencyPairId,
            true,
            currencyExchanges
          )
        }
      };
    case FETCH_CURRENCY_PRICE_SUCCESS:
      const { priceData } = action;
      return {
        byId: {
          ...currencyExchanges,
          [currencyPairId]: updateCurrencyPrice(
            priceData,
            currencyPairId,
            currencyExchanges
          )
        }
      };
    case FETCH_CURRENCY_PRICE_FAILURE:
      return {
        byId: {
          ...currencyExchanges,
          [currencyPairId]: updateCurrencyFetchingError(
            currencyPairId,
            currencyExchanges
          )
        }
      };
    default:
      return state;
  }
};
