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

  //////
  // API call for Crypto prices, runs on inital render and when we hit refresh
  React.useEffect(() => {
    fetch(
      `https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd`
    )
      .then((res) => res.json())
      .then((data) => setPrices(data.data.filter((el)=> el.slug === "bitcoin" || el.slug === "ethereum" || el.slug === "solana")));
  }, [count]);


  //////
  // When we click refresh, count increases, which kicks off our useEffect  above
  let refresh = () => setCount((prevState) => prevState + 1);

  /////
  // using map on our prices state to create an array of Price components which we will display 
  let pricesArr = prices.map((el, i) => <Price symbol={el.symbol} price={el.metrics.market_data.price_usd} key={i}/>)

  return (
    <div className="price-list">
      <span onClick={refresh} className="material-symbols-outlined refresh">refresh</span>
      {pricesArr}
    </div>
  );
}
