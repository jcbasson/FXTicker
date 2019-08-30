import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { getCurrencyPairs } from './utils'
import { updateCurrencyPrices } from './actions';
import styled from 'styled-components';
import { IUpdateCurrenciesButtonUI } from './types';

export const UpdateCurrenciesButtonUI: React.FC<IUpdateCurrenciesButtonUI> = ({ currencyPairs, clickHandler }) => {
  return (
    <>
      <UpdateButton onClick={clickHandler(currencyPairs)}>
        Update Prices
      </UpdateButton>
    </>
  )
}

const UpdateButton = styled.button`
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  background-color: #58bfa9;
  color: white;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: none;
  margin-top: 15px;
  outline: none;
  font-family: sans-serif;
`

const makeMapStateToProps = () => {
  const makeGetCurrencyPairs = getCurrencyPairs()
  return (state: any) => {
    return {
      currencyPairs: makeGetCurrencyPairs(state),
    }
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    clickHandler: (currencyPairs: { id: string; from: string; to: string }[]) => () => {
       dispatch(updateCurrencyPrices(currencyPairs));
    }    
  }
}

export const UpdateCurrenciesButton = connect(
  makeMapStateToProps,
  mapDispatchToProps
)(UpdateCurrenciesButtonUI)
