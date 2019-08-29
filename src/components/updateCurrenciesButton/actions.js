import { httpCurrencyService } from '../../services'

export const FETCH_CURRENCIES = 'FETCH_CURRENCIES'
export const FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS'

export const updateCurrencyPrices = currencyPairs => dispatch => {
  dispatch(fetchCurrencies())

  return Promise.all([
    ...currencyPairs.map(cp => httpCurrencyService.fetchCurrencyExchange(cp)),
  ]).then((result) => {
      dispatch(fetchCurrenciesSuccess(result));
  }, (error) => {
      //TODO: log this error
  })
}

export const fetchCurrencies = () => {
  return {
    type: FETCH_CURRENCIES,
  }
}

export const fetchCurrenciesSuccess = (currenciesData) => {
    return {
        type: FETCH_CURRENCIES_SUCCESS,
        currenciesData
    }
}