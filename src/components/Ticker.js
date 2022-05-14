import React from "react";
import Price from "./Price";

// https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd

const defaultPrices = [
  {
    Symbol: "Placeholder",
    metrics: {
      market_data: {
        price_usd: 100,
      },
    },
  },
];

export default function Ticker() {
  const [prices, setPrices] = React.useState(defaultPrices);
  let [count, setCount] = React.useState(0);

  let [unit, setUnit] = React.useState(() => {
    let initialValue = JSON.parse(localStorage.getItem("unit"));
    return initialValue || false;
  });

  //////
  // API call for Crypto prices, runs on inital render and when we hit refresh
  React.useEffect(() => {
    fetch(
      `https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd`
    )
      .then((res) => res.json())
      .then((data) => setPrices(data.data));
  }, [count]);

  /////
  // Setting local storage value for if unit is true or false
  React.useEffect(() => {
    localStorage.setItem(`unit`, unit);
  }, [unit]);

  //////
  // When we click refresh, count increases, which kicks off our useEffect  above
  let refresh = () => setCount((prevState) => prevState + 1);

  /////
  // Looping through our API data and pushing BTC, SOL and ETH to the pricesarr which we display on the page.
  let pricesArr = [];
  function getPrices(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].symbol === "BTC") {
        pricesArr.push(
          <Price
            symbol={arr[i].symbol}
            price={arr[i].metrics.market_data.price_usd}
            key={i}
            unit={unit}
          />
        );
      } else if (arr[i].symbol === "SOL") {
        pricesArr.push(
          <Price
            symbol={arr[i].symbol}
            price={arr[i].metrics.market_data.price_usd}
            key={i}
            unit={unit}
          />
        );
      } else if (arr[i].symbol === "ETH") {
        pricesArr.push(
          <Price
            symbol={arr[i].symbol}
            price={arr[i].metrics.market_data.price_usd}
            key={i}
            unit={unit}
          />
        );
      }
    }
  }
  getPrices(prices);

  const handleClick = () => setUnit((prevState) => !prevState);

  return (
    <div className="price-list">
      <span onClick={refresh} className="material-symbols-outlined refresh">
        refresh
      </span>
      {pricesArr}
      <div className="f-c-switch">
        <p className="unit">USD</p>
        {unit ? (
          <span
            className="material-symbols-outlined unit-switch"
            onClick={handleClick}
          >
            toggle_off
          </span>
        ) : (
          <span
            className="material-symbols-outlined unit-switch"
            onClick={handleClick}
          >
            toggle_on
          </span>
        )}
        <p className="unit">EUR</p>
      </div>
    </div>
  );
}
