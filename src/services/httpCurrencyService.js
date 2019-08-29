const API_KEY = "GI6BD4R76Q5EEJY9";
const END_POINT = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE`;

export const fetchCurrencyExchange = (
  currencyPair,
  successCallback,
  errorCallback
) => {
  return fetch(
    `${END_POINT}&from_currency=${currencyPair.from}&to_currency=${currencyPair.to}&apikey=${API_KEY}`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(
        successCallback,
        errorCallback
    );
};
