export const FETCH_CURRENCY_PRICE = 'FETCH_CURRENCY_PRICE';
export const FETCH_CURRENCY_PRICE_SUCCESS = 'FETCH_CURRENCY_PRICE_SUCCESS';
export const FETCH_CURRENCY_PRICE_FAILURE = 'FETCH_JOKE_FAILURE';

const API_KEY = "GI6BD4R76Q5EEJY9";
const END_POINT = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE`;


export const loadCurrencyPrice = (currencyPair) => dispatch => {
  dispatch(fetchCurrencyPrice(currencyPair.id));
  return fetch(
    `${END_POINT}&from_currency=${currencyPair.from}&to_currency=${currencyPair.to}&apikey=${API_KEY}`)
      .then(response => {
        
          if (response.ok) {
              return response.json();
          }
          throw new Error(response.statusText);
      })
      .then(
          data => {
              dispatch(fetchCurrencyPriceSuccess(currencyPair.id, data));
          },
          error => {
              dispatch(fetchCurrencyPriceFail(currencyPair.id, error))
          })
};

export const fetchCurrencyPrice = (currencyPairId) => {
  return {
    type: FETCH_CURRENCY_PRICE,
    currencyPairId
  };
}

export const fetchCurrencyPriceSuccess = (currencyPairId, priceData) => {
  return {
    type: FETCH_CURRENCY_PRICE_SUCCESS,
    currencyPairId,
    priceData
  };
}

export const fetchCurrencyPriceFail = (currencyPairId, error) => {
  return {
    type: FETCH_CURRENCY_PRICE_FAILURE,
    currencyPairId,
    error
  };
}