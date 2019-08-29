import { httpCurrencyService } from '../../services'

export const FETCHING_CURRENCIES = 'FETCHING_CURRENCIES'

export const updateCurrencyPrices = currencyPairs => dispatch => {
  dispatch(updateCurrencies())

  return Promise.all([
    ...currencyPairs.map(cp => httpCurrencyService.fetchCurrencyExchange(cp)),
  ]).then((result) => {
      console.log(result);
  })
}

export const updateCurrencies = () => {
  return {
    type: FETCHING_CURRENCIES,
  }
}
