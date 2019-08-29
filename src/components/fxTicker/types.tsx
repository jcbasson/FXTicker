export namespace FXTickerTypes {
  
  export namespace Data {
    export enum PriceStatus {
      increased = "increased",
      decreased = "decreased",
      same = "same"
    }

    export interface ISellBuyPrice {
      value: number | null;
      status: PriceStatus;
    }

    export interface ICurrencyPair {
      [id: string]: {
        from: string;
        to: string;
        sell: ISellBuyPrice;
        buy: ISellBuyPrice;
        isFetching: boolean;
        isPolling: boolean;
        error: any;
      };
    }

    export interface ICurrencyExchanges {
      byId: ICurrencyPair;
    }
  }

  export namespace Utils {
    export type GetCurrencyPairList = (state: {
      currencyExchanges: Data.ICurrencyExchanges;
    }) => { from: string; to: string }[];
  }
}
