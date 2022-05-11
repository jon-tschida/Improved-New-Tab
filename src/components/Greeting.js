import React from 'react'

export default function Greeting(props) {

    // Defaulting our greeting to Good Morning
    let greeting = "Good morning";

    let time = props.time.getHours()
    if (time >= 12 && time <= 17) greeting = "Good Afternoon"
    else if (time > 17 && time < 24) greeting = "Good Evening"
    else if (time >= 0 && time < 12) greeting = "Good Morning"

    return (

        <div className='greeting'>
            <p className='greeting--header'>{greeting},</p>
        </div>
    )
}
