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

    React.useEffect(() => {
        fetch(`https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd`)
            .then(res => res.json())
            .then(data => setPrices(data.data))

    }, [])


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
            {pricesArr}
        </div>
    )
}
