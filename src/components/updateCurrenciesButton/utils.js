import _ from 'lodash'
import { createSelector } from 'reselect'

export const getCurrencyPairs = () => {
  return createSelector(
    [getCurrencyExchanges],
    getCurrencyPairList
  )
}

const getCurrencyExchanges = state => {
  return _.get(state, 'currencyExchanges.byId', {})
}

const getCurrencyPairList = currencyExchanges => {
  return Object.values(currencyExchanges).map(ce => ({
    id: _.get(ce, 'id'),
    from: _.get(ce, 'from'),
    to: _.get(ce, 'to'),
  }))
}
