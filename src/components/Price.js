import React from 'react'

export default function Price(props) {
    return (
        <>
            <div>{props.symbol} {props.price.toFixed(2)}</div>
        </>
    )
}
