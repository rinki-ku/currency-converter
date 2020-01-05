export const fetchCurrencies = () => {
  return fetch("https://api.exchangeratesapi.io/latest")
    .then(response => response.json())
    .then(({ rates }) => {
      rates.EUR = 1;

      Object.keys(rates).map(
        currency => (rates[currency] += Math.random() / 20)
      );

      console.log("New FX rates Fetched");

      return rates;
    });
};
