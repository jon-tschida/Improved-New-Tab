import React from 'react'

let loadingData = {
    main: {
        feels_like: "Loading..",
        temp_max: "Loading..."
    },
    weather: {
        0: {
            icon: "loading"
        }
    }
}

export default function Weather() {
    const [weatherData, setWeatherData] = React.useState(loadingData)


    React.useEffect(() => {
        fetch("http://api.openweathermap.org/data/2.5/weather?lat=32.7157&lon=117.1611&appid=2a8ab662e8539e2cb45726e6080084e6")
            .then(res => res.json())
            .then(data => setWeatherData(data))
    }, [])

    console.log(weatherData)

    return (
        <div className='greeting'>
            <p className='greeting--paragraph'>Right now it is {weatherData.main.feels_like} degrees,</p>
            <p className='greeting--paragraph'>With a high today of {weatherData.main.temp_max}</p>
            <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weather icon" className='weather-icon'></img>
        </div>
    )
}
