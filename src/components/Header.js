import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
import Greeting from './Greeting';

export default function Header(props) {

    let [curTime, setCurTime] = React.useState(new Date());
    let [curDate, setCurDate] = React.useState();

    setInterval(() => {
        setCurTime(new Date());
        setCurDate(new Date());
    }, 5000)

    const formatDay = new Intl.DateTimeFormat(`en-US`, props.dayOptions).format(curDate);

    return (
        <div>
            <div className='date-time'>
                <p className='time'>{props.formatAMPM(curTime)}</p>
                <p className='date'>{formatDay}</p>
            </div>
            <Greeting time={curTime} />

        </div>
    )
}
