import React from 'react'
import Price from './Price';

// https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd

const defaultPrices = [
    {
        Symbol: "Placeholder",
        metrics: {
            market_data: {
                price_usd: 100
            }
        }
    },
]

export default function Ticker() {

    const [prices, setPrices] = React.useState(defaultPrices);
    let [count, setCount] = React.useState(0)

    React.useEffect(() => {
        fetch(`https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd`)
            .then(res => res.json())
            .then(data => setPrices(data.data))

    }, [count])

    let refresh = () => setCount(prevState => prevState + 1);

    let pricesArr = [];
    function getPrices(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].symbol === "BTC") {
                pricesArr.push(<Price symbol={arr[i].symbol} price={arr[i].metrics.market_data.price_usd} key={i} />)
            }
            else if (arr[i].symbol === "SOL") {
                pricesArr.push(<Price symbol={arr[i].symbol} price={arr[i].metrics.market_data.price_usd} key={i} />)
            }
            else if (arr[i].symbol === "ETH") {
                pricesArr.push(<Price symbol={arr[i].symbol} price={arr[i].metrics.market_data.price_usd} key={i} />)
            }
        }
    }
    getPrices(prices)

    return (
        <div className='price-list'>
            <span onClick={refresh} className="material-symbols-outlined refresh">refresh</span>
            {pricesArr}
        </div>
    )
}
