import _ from 'lodash'

export const updateCurrencyFetchingStatus = (
  currencyPairId,
  status,
  currencyExchanges
) => {
  const currency = _.get(currencyExchanges, currencyPairId, {})
  return {
    ...currency,
    isFetching: status,
  }
}

export const updateAllCurrencyFetchingStatus = (currencyExchanges, status) => {
  return Object.values(currencyExchanges).reduce(
    currencyUpdateFetchStatusAccumulator(status),
    {}
  )
}

export const currencyUpdateFetchStatusAccumulator = status => (
  currencyExchangeAccumulator,
  currencyPair
) => {
  return {
    ...currencyExchangeAccumulator,
    [currencyPair.id]: {
      ...currencyPair,
      isFetching: status,
    },
  }
}

export const updateCurrencyPrice = (
  priceData,
  currencyPairId,
  currencyExchanges
) => {
  const currency = _.get(currencyExchanges, currencyPairId, {})

  const previousBuyPrice = _.get(currency, 'buy.value')
  const previousSellPrice = _.get(currency, 'sell.value')

  const currentBuyPrice =
    !_.isNil(priceData['Realtime Currency Exchange Rate']) &&
    !_.isNil(priceData['Realtime Currency Exchange Rate']['8. Bid Price'])
      ? priceData['Realtime Currency Exchange Rate']['8. Bid Price']
      : previousBuyPrice

  const currentSellPrice =
    !_.isNil(priceData['Realtime Currency Exchange Rate']) &&
    !_.isNil(priceData['Realtime Currency Exchange Rate']['9. Ask Price'])
      ? priceData['Realtime Currency Exchange Rate']['9. Ask Price']
      : previousSellPrice

  const buyPriceStatus = getCurrencyPriceStatus(
    previousBuyPrice,
    currentBuyPrice
  )
  const sellPriceStatus = getCurrencyPriceStatus(
    previousSellPrice,
    currentSellPrice
  )

  return {
    ...currency,
    sell: {
      value: currentSellPrice,
      status: sellPriceStatus,
    },
    buy: {
      value: currentBuyPrice,
      status: buyPriceStatus,
    },
    isFetching: false,
  }
}

export const updateCurrencyFetchingError = (
  currencyPairId,
  error,
  currencyExchanges
) => {
  const currency = _.get(currencyExchanges, currencyPairId, {})
  return {
    ...currency,
    isFetching: false,
    error,
  }
}

const getCurrencyPriceStatus = (previousPrice, currentPrice) => {
  if (previousPrice < currentPrice) {
    return 'increased'
  }

  if (previousPrice > currentPrice) {
    return 'decrease'
  }

  return 'same'
}

export const getCurrencyPairById = (state, id) => {
  return _.get(state, `currencyExchanges.byId.${id}`)
}

export const isCurrencySellPriceAvailable = currencyPair => {
  return !_.isNil(currencyPair.sell.value)
}

export const isCurrencyBuyPriceAvailable = currencyPair => {
  return !_.isNil(currencyPair.buy.value)
}
