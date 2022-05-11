import React from 'react'

// creating dummy object for filler content when waiting for API data to load
let loadingData = {
    main: {
        feels_like: 0,
        temp_max: 0
    },
    weather: {
        0: {
            icon: "10n",
            description: "loading",
        }
    }
}

// Function for converting temps from API to F
let convertF = (temp) => Math.trunc((temp - 273.15) * 9 / 5 + 32)

export default function Weather() {
    const [weatherData, setWeatherData] = React.useState(loadingData)


    React.useEffect(() => {
        fetch("http://api.openweathermap.org/data/2.5/weather?lat=41.2565&lon=95.9345&appid=2a8ab662e8539e2cb45726e6080084e6")
            .then(res => res.json())
            .then(data => setWeatherData(data))
    }, [])

    return (
        <div className='greeting'>
            <p className='greeting--paragraph'>Right now it is {convertF(weatherData.main.feels_like)}°,</p>
            {convertF(weatherData.main.temp_max) !== convertF(weatherData.main.feels_like) && <p className='greeting--paragraph'>with a high today of {convertF(weatherData.main.temp_max)}°</p>}

            <div className='icon-description'>
                <p className='weather--paragraph'>{weatherData.weather[0].description}</p>
                <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weather icon" className='weather-icon'></img>
            </div>
        </div>
    )
}
