import { getCurrencyPairs } from "./utils";

describe("UpdateCurrenciesButton/utils", () => {
  describe("getCurrencyPairs", () => {
    const mockState = {
      currencyExchanges: {
        byId: {
          EURUSD: {
            id: "EURUSD",
            from: "EUR",
            to: "USD",
            isFetching: false,
            isPolling: false,
            error: null
          },
          USDCHF: {
            id: "USDCHF",
            from: "USD",
            to: "CHF",
            isFetching: false,
            isPolling: false,
            error: null
          },
          USDJPY: {
            id: "USDJPY",
            from: "USD",
            to: "JPY",
            isFetching: false,
            isPolling: false,
            error: null
          }
        }
      }
    };
    it("should return a list of currency pairs from state", () => {
      const makeGetCurrencyPairs = getCurrencyPairs();
      const result = makeGetCurrencyPairs(mockState);

      const expected = [
        { id: "EURUSD", from: "EUR", to: "USD" },
        { id: "USDCHF", from: "USD", to: "CHF" },
        { id: "USDJPY", from: "USD", to: "JPY" }
      ];

      expect(result).toEqual(expected);
    });
  });
});
