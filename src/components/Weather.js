import React from "react";

// creating dummy object for filler content when waiting for API data to load
let loadingData = {
  main: {
    feels_like: 0,
    temp_max: 0,
  },
  weather: {
    0: {
      icon: "10n",
      description: "loading",
    },
  },
};

// Function for converting temps from API to F
let convertF = (temp) => Math.trunc(((temp - 273.15) * 9) / 5 + 32);

// Function to capitalize
let capitalize = (str) => str.replace(str[0], str[0].toUpperCase());

export default function Weather() {
  const [weatherData, setWeatherData] = React.useState(loadingData);

  React.useEffect(() => {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?lat=41.2565&lon=95.9345&appid=2a8ab662e8539e2cb45726e6080084e6"
    )
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
    console.log(`weather api called`);
  }, []);

  return (
    <div className="weather-desc">
      <p className="greeting--paragraph">
        {capitalize(weatherData.weather[0].description)} and{" "}
        {convertF(weatherData.main.feels_like)}°,
      </p>
      {convertF(weatherData.main.temp_max) !==
        convertF(weatherData.main.feels_like) && (
        <p className="greeting--paragraph">
          with a high today of {convertF(weatherData.main.temp_max)}°
        </p>
      )}
    </div>
  );
}
