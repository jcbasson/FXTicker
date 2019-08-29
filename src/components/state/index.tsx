interface IDefaultStore {
  currencyPairs: string[];
}
const defaultStore: IDefaultStore = {
  currencyPairs: ["EURUSD", "USDCHF", "USDJPY"]
};

export { defaultStore };
