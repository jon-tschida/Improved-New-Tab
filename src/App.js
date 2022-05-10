import React from "react"

// "https://api.nomics.com/v1/currencies/ticker?key=330248465a43b69476538cd786e49a832c8e9c9d&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&platform-currency=ETH&per-page=100&page=1"
// 330248465a43b69476538cd786e49a832c8e9c9d

export default function App() {

  const [apiData, setApiData] = React.useState();

  React.useEffect(() => {
    fetch("https://api.nomics.com/v1/currencies/ticker?key=330248465a43b69476538cd786e49a832c8e9c9d&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&platform-currency=ETH&per-page=100&page=1")
      .then(res => res.json())
      .then(data => setApiData(data[0]))

  }, [])

  console.log(apiData)
  return (
    <h1>Hi</h1>
  );
}

