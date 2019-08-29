import { httpCurrencyService } from "../../services";

export const FETCH_CURRENCY_PRICE = "FETCH_CURRENCY_PRICE";
export const FETCH_CURRENCY_PRICE_SUCCESS = "FETCH_CURRENCY_PRICE_SUCCESS";
export const FETCH_CURRENCY_PRICE_FAILURE = "FETCH_JOKE_FAILURE";

export const loadCurrencyPrice = currencyPair => dispatch => {
  dispatch(fetchCurrencyPrice(currencyPair.id));
  return httpCurrencyService.fetchCurrencyExchange(
    currencyPair,
    data => {
      dispatch(fetchCurrencyPriceSuccess(currencyPair.id, data));
    },
    error => {
      dispatch(fetchCurrencyPriceFail(currencyPair.id, error));
    }
  );
};

export const fetchCurrencyPrice = currencyPairId => {
  return {
    type: FETCH_CURRENCY_PRICE,
    currencyPairId
  };
};

export const fetchCurrencyPriceSuccess = (currencyPairId, priceData) => {
  return {
    type: FETCH_CURRENCY_PRICE_SUCCESS,
    currencyPairId,
    priceData
  };
};

export const fetchCurrencyPriceFail = (currencyPairId, error) => {
  return {
    type: FETCH_CURRENCY_PRICE_FAILURE,
    currencyPairId,
    error
  };
};
