import {
  updateCurrencyFetchingStatus,
  updateAllCurrencyFetchingStatus,
} from './utils'

describe('FXTicker/utils', () => {
  describe('updateCurrencyFetchingStatus', () => {
    it('should update the fetching status for a given currency pair', () => {
      const result = updateCurrencyFetchingStatus('EURUSD', true, {
        EURUSD: {
          id: 'EURUSD',
          from: 'EUR',
          to: 'USD',
          isFetching: false,
          isPolling: false,
          error: null,
        },
      })

      const expected = {
        id: 'EURUSD',
        from: 'EUR',
        to: 'USD',
        isFetching: true,
        isPolling: false,
        error: null,
      }

      expect(result).toEqual(expected)
    })
  })

  describe('updateAllCurrencyFetchingStatus', () => {
    const mockState = {
      currencyExchanges: {
        byId: {
          EURUSD: {
            id: 'EURUSD',
            from: 'EUR',
            to: 'USD',
            isFetching: false,
            isPolling: false,
            error: null,
          },
          USDCHF: {
            id: 'USDCHF',
            from: 'USD',
            to: 'CHF',
            isFetching: false,
            isPolling: false,
            error: null,
          },
          USDJPY: {
            id: 'USDJPY',
            from: 'USD',
            to: 'JPY',
            isFetching: false,
            isPolling: false,
            error: null,
          },
        },
      },
    }
    it('should update the fetch status for all currency pairs provided', () => {
      const result = updateAllCurrencyFetchingStatus(
        mockState.currencyExchanges.byId,
        true
      )
      const expected = {
        EURUSD: {
          id: 'EURUSD',
          from: 'EUR',
          to: 'USD',
          isFetching: true,
          isPolling: false,
          error: null,
        },
        USDCHF: {
          id: 'USDCHF',
          from: 'USD',
          to: 'CHF',
          isFetching: true,
          isPolling: false,
          error: null,
        },
        USDJPY: {
          id: 'USDJPY',
          from: 'USD',
          to: 'JPY',
          isFetching: true,
          isPolling: false,
          error: null,
        },
      }

      expect(result).toEqual(expected)
    })
  })

  describe('updateCurrencyPrice', () => {
    const mockState = {
      currencyExchanges: {
        byId: {
          EURUSD: {
            id: 'EURUSD',
            from: 'EUR',
            to: 'USD',
            isFetching: false,
            isPolling: false,
            error: null,
          },
          USDCHF: {
            id: 'USDCHF',
            from: 'USD',
            to: 'CHF',
            isFetching: false,
            isPolling: false,
            error: null,
          },
          USDJPY: {
            id: 'USDJPY',
            from: 'USD',
            to: 'JPY',
            isFetching: false,
            isPolling: false,
            error: null,
          },
        },
      },
    }
    it('should update the currency price and status to increased if the price increased', () => {
      //   const result = updateCurrencyPrice(
      //     mockState.currencyExchanges.byId,
      //     true
      //   )
      //   expect(result).toEqual(expected)
    })
  })
})
