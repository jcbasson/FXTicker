import * as React from "react";
import _ from 'lodash'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { startPolling, stopPolling } from './actions'


interface IFXTicker {
    clickHandlerStartPolling: () => void;
    clickHandlerStopPolling: () => void;
}

export const FXTickerUI: React.FC<IFXTicker> = ({clickHandlerStartPolling, clickHandlerStopPolling}) => {
  return (
    <>
      <button onClick={clickHandlerStartPolling}>Star Polling</button>
      <button onClick={clickHandlerStopPolling}>Stop Polling</button>
    </>
  );
};


const mapStateToProps = (state: any) => {
 
    return {  }
  }
  
  const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
     clickHandlerStartPolling: () => dispatch(startPolling()),
     clickHandlerStopPolling: () => dispatch(stopPolling())
    }
  }
  
  export const FXTicker = connect(
    mapStateToProps,
    mapDispatchToProps
  )(FXTickerUI)
  
