import { useCurrency } from "./currency.hooks";

export default function CurrencyTable() {
  const [currency, currencyBuy, currencySell, fixedCurrency] = useCurrency();

  return (
    <div className="bg-orange-500 min-h-screen">
      <div className="mx-auto max-w-2xl flex flex-col text-gray-200">
        <div className="mt-40 self-center justify-self-center w-full">
          <h1 className="text-4xl font-bold text-center mb-4">Currency Exchange</h1>
          <table className="table-auto border-collapse w-full">
            <thead className="text-left">
              <tr className="border-b-2 border-white">
                <th className="p-2 text-lg">Currency</th>
                <th className="p-2 text-lg">We Buy</th>
                <th className="p-2 text-lg">Exchange Rate</th>
                <th className="p-2 text-lg">We Sell</th>
              </tr>
            </thead>
            <tbody>
              {currency?.rates &&
                Object.entries(currency.rates).map(([key, value]) => (
                  <tr key={key}>
                    <td className="p-2 font-medium">{key}</td>
                    <td className="p-2">
                      {fixedCurrency(Number(value), 4, currencyBuy)}
                    </td>
                    <td className="p-2">{fixedCurrency(Number(value), 4)}</td>
                    <td className="p-2">
                      {fixedCurrency(Number(value), 4, currencySell)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <div className="text-center mt-4"> 
            <p>Rates are based from 1 USD</p>
            <p>This application uses API from https://currencyfreaks.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
