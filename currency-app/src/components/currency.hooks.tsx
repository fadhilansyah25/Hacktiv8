import React from "react";

type ExchangeRates = {
  date: string;
  base: string;
  rates: {
    [key: string]: string;
  };
};

export const useCurrency = () => {
  const [currency, setCurrency] = React.useState<ExchangeRates | null>(null);

  React.useEffect(() => {
    fetch(
      `https://api.currencyfreaks.com/latest?apikey=${process.env.REACT_APP_CURRENCY_API_KEY}&symbols=CAD,IDR,JPY,CHF,EUR,GBP`
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrency(data);
      });
  }, []);

  const fixedCurrency = (
    value: number,
    fixedNumber: number,
    callback?: (currenry: number) => number,
  ): number => {
    if (typeof callback === "function") {
      return callback(value).toFixed(fixedNumber) as unknown as number;
    }
    return value.toFixed(fixedNumber) as unknown as number;
  };

  const currencyBuy = (currency: number): number => {
    return currency + currency * 0.05;
  };

  const currencySell = (currency: number): number => {
    return currency - currency * 0.05;
  };

  return [currency, currencyBuy, currencySell, fixedCurrency] as const;
};
