import React from "react";

// creating dummy object for filler content when waiting for API data to load
let loadingData = {
  main: {
    feels_like: 0,
    temp_max: 0,
  },
  weather: {
    0: {
      description: "loading",
    },
  },
};

// Function for converting temps from API to F

// Function to capitalize
let capitalize = (str) => str.replace(str[0], str[0].toUpperCase());

export default function Weather() {
  const [weatherData, setWeatherData] = React.useState(loadingData);

  React.useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=46.76466&lon=-92.09463&units=imperial&appid=2a8ab662e8539e2cb45726e6080084e6`
    )
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
  }, []);

  return (
    <div className="weather-desc">
      <p className="greeting--paragraph">
        {capitalize(weatherData.weather[0].description)} and{" "}
        {Math.trunc(weatherData.main.feels_like)}°,
      </p>
      {weatherData.main.temp_max !== weatherData.main.feels_like && (
        <p className="greeting--paragraph">
          with a high today of {Math.trunc(weatherData.main.temp_max)}°
        </p>
      )}
    </div>
  );
}
