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

export interface IUpdateCurrenciesButton {
  currencyPairs: ICurrencyPair[]
  clickHandler: (currencyPairs: ICurrencyPair[]) => () => void
}

export type GetCurrencyPairs = () => (
  state: any
) => { id: string; from: string; to: string }[]

export type GetCurrencyExchanges = (state: any) => ICurrency;

export type GetCurrencyPairList = (currencyExchanges: ICurrency) => { id: string; from: string; to: string }[] 

export interface IUpdateCurrenciesButtonUI {
    currencyPairs: { id: string; from: string; to: string }[],
    clickHandler: (currencyPairs: { id: string; from: string; to: string }[]) => () => void;
}