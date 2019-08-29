import React, { useEffect } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { loadCurrencyPrice } from './actions'
import { useInterval } from './hooks'
import {
  FXTickerContainer,
  FXTickerHeader,
  FXTickerBody,
  PriceContainer,
  PriceHeader,
  Price,
} from './styled'
import {
  getCurrencyPairById,
  isCurrencySellPriceAvailable,
  isCurrencyBuyPriceAvailable,
} from './utils'

export const FXTickerUI = ({
  id,
  currencyPair,
  isSellPriceAvailable,
  isBuyPriceAvailable,
  fetchCurrencyPrice,
}) => {
  // useEffect(() => {
  //   fetchCurrencyPrice(currencyPair)
  // }, [])

  // useInterval(() => {
  //   fetchCurrencyPrice(currencyPair)
  // }, 60000)

  return (
    <FXTickerContainer>
      <FXTickerHeader>{id}</FXTickerHeader>
      <FXTickerBody>
        <PriceContainer>
          <PriceHeader>Sell</PriceHeader>
          {isSellPriceAvailable && (
            <Price status={currencyPair.sell.status}>
              {currencyPair.sell.value}
            </Price>
          )}
        </PriceContainer>
        <PriceContainer>
          <PriceHeader>Buy</PriceHeader>
          {isBuyPriceAvailable && (
            <Price status={currencyPair.buy.status}>
              {currencyPair.buy.value}
            </Price>
          )}
        </PriceContainer>
      </FXTickerBody>
    </FXTickerContainer>
  )
}

const mapStateToProps = (state, props) => {
  const currencyPair = getCurrencyPairById(state, props.id)
  return {
    currencyPair,
    isSellPriceAvailable: isCurrencySellPriceAvailable(currencyPair),
    isBuyPriceAvailable: isCurrencyBuyPriceAvailable(currencyPair),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrencyPrice: currencyPair =>
      dispatch(loadCurrencyPrice(currencyPair)),
  }
}

export const FXTicker = connect(
  mapStateToProps,
  mapDispatchToProps
)(FXTickerUI)
