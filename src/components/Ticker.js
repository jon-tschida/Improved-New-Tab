import React from "react";
import Price from "./Price";
import Loader from "./Loader";

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
  let [loading, setLoading] = React.useState(true)
  let pricesArr = [];
  //////
  // API call for Crypto prices, runs on inital render and when we hit refresh
  React.useLayoutEffect(() => {
    fetch(
      `https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd`
    )
      .then((res) => res.json())
      .then((data) =>
        setPrices(
          data.data.filter(
            (el, i) =>
              el.slug === "bitcoin" ||
              el.slug === "ethereum" ||
              el.slug === "solana"
          )
        )
      );
  }, [count]);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  //////
  // When we click refresh, count increases, which kicks off our useEffect  above
  let refresh = () => setCount((prevState) => prevState + 1);

  /////
  // using map on our prices state to create an array of Price components which we will display
  pricesArr = prices.map((el, i) => (
    <Price
      symbol={el.symbol}
      price={el.metrics.market_data.price_usd}
      key={i}
    />
  ));

  return (
    <div className="price-list">
      {loading === false ?
        <>
          <span onClick={refresh} className="material-symbols-outlined refresh">
            refresh
          </span>
          {pricesArr}
        </>
        : <Loader />
      }
    </div>
  );
}
