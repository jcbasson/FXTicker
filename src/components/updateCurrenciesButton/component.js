import React, { useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { updateCurrencyPrices } from "./actions";
import { getCurrencyPairs } from "./utils";

export const UpdateCurrenciesButtonUI = ({ currencyPairs, clickHandler }) => {
  return (
    <>
      <UpdateButton onClick={clickHandler(currencyPairs)}>Update Prices</UpdateButton>
    </>
  );
};

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
`;

const makeMapStateToProps = () => {
  const makeGetCurrencyPairs = getCurrencyPairs();
  return state => {
    return {
      currencyPairs: makeGetCurrencyPairs(state)
    };
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clickHandler: currencyPairs => dispatch(updateCurrencyPrices(currencyPairs))
  };
};

export const UpdateCurrenciesButton = connect(
  makeMapStateToProps,
  mapDispatchToProps
)(UpdateCurrenciesButtonUI);
