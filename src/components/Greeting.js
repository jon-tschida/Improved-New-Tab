import React from 'react'

export default function Greeting(props) {
    let time = props.time.getHours()
    let greeting = "good morning";

    if (time >= 12 && time <= 17) greeting = "Good Afternoon"
    else if (time > 17 && time < 24) greeting = "Good Evening"
    else if (time >= 0 && time < 12) greeting = "Good Morning"

    return (

        <div className='greeting'>
            <p className='greeting--header'>{greeting}</p>
            <p className='greeting--paragraph'>Right now it is 58 degrees,</p>
            <p className='greeting--paragraph'>With a high today of 75</p>



        </div>
    )
}
