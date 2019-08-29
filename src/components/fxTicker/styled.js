import styled from 'styled-components'

export const FXTickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 200px;
  background: #011627;
  border-radius: 10px;
`

export const FXTickerHeader = styled.h2`
  color: white;
  font-size: 30px;
  line-height: 40px;
  font-family: sans-serif;
  text-align: center;
`

export const FXTickerBody = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
`

export const PriceContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const PriceHeader = styled.label`
  line-height: 30px;
  color: white;
  font-family: sans-serif;
  text-align: center;
  font-size: 20px;
`

export const Price = styled.label`
  line-height: 30px;
  text-align: center;
  color: ${({ status }) => {
    switch (status) {
      case 'increased':
        return 'green'
      case 'decreased':
        return 'red'
      default:
        return 'white'
    }
  }};
`
