import { type } from '@testing-library/user-event/dist/type';
import React from 'react'

export default function Header(props) {

    return (
        <div>
            <div className='date-time'>
                <p className='date'>{props.formatDay}</p>
                <p className='time'>{props.formatAMPM(props.curTime)}</p>
            </div>
        </div>
    )
}
