import _ from 'lodash'
import { createSelector } from 'reselect'
import {
  GetCurrencyPairs,
  GetCurrencyExchanges,
  GetCurrencyPairList,
} from './types'

export const getCurrencyPairs: GetCurrencyPairs = () => {
  return createSelector(
    [getCurrencyExchanges],
    getCurrencyPairList
  )
}

const getCurrencyExchanges: GetCurrencyExchanges = state => {
  return _.get(state, 'currencyExchanges.byId', {})
}

const getCurrencyPairList: GetCurrencyPairList = currencyExchanges => {
  return Object.values(currencyExchanges).map(ce => ({
    id: _.get(ce, 'id'),
    from: _.get(ce, 'from'),
    to: _.get(ce, 'to'),
  }))
}
