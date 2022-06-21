import React from 'react'
import "../loaderCss.css"

export default function Loader() {
    return (
        <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
