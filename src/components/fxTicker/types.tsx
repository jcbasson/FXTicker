export enum PriceStatus {
  increased = 'increased',
  decreased = 'decreased',
  same = 'same',
}

export interface ISellBuyPrice {
  value: number | null
  status: PriceStatus
}
export interface ICurrencyPair {
  id: string
  from: string
  to: string
  sell: ISellBuyPrice
  buy: ISellBuyPrice
  isFetching: boolean
  error: any
}
export interface ICurrency {
  [id: string]: ICurrencyPair
}

export interface ICurrencyExchanges {
  byId: ICurrencyPair
}

export type GetCurrencyPairList = (state: {
  currencyExchanges: ICurrencyExchanges
}) => { from: string; to: string }[]

export type UseInterval = (callback: any, delay: number) => void


export interface IFXTicker {
  id: string;
  currencyPair: ICurrencyPair,
  isSellPriceAvailable: boolean;
  isBuyPriceAvailable: boolean;
  fetchCurrencyPrice: (currencyPair: ICurrencyPair) => void;
}

export type UpdateCurrencyFetchingStatus =(currencyPairId: string, status: boolean, currencyExchanges: ICurrency) => any;

export type UpdateAllCurrencyFetchingStatus = (currencyExchanges: ICurrency, status: boolean) => ICurrency;

export type UpdateCurrencyPrice = (priceData: any, currencyPairId: string, currencyExchanges: ICurrency) => any;

export type UpdateAllCurrencyPrices =( currenciesData: any[], currencyExchanges: ICurrency) => ICurrency;

export type UpdateCurrencyFetchingError = (currencyPairId: string, error: any, currencyExchanges: ICurrency) => any;

export type GetCurrencyPairId = (state: any, id: string) => ICurrencyPair;

export type IsCurrencySellPriceAvailable = (currencyPair: ICurrencyPair) => boolean; 

export type IsCurrencyBuyPriceAvailable = (currencyPair: ICurrencyPair) => boolean; 

export type CurrencyUpdateFetchStatusAccumulator = (status: boolean) => (currencyExchangeAccumulator: ICurrency, currencyPair: ICurrencyPair) => ICurrency;

export type IsValidCurrencyDataRetrieved = (currencyData: any) => boolean;

export type UpdateCurrenciesAccumulator = (currencyExchanges: ICurrency) => (currenciesAccumulator: ICurrency, currencyData: any) => ICurrency;

export type GetCurrencyPriceStatus = (previousPrice: number, currentPrice: number) => PriceStatus