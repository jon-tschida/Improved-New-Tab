import React from "react";
import Header from "./components/Header";
import Weather from "./components/Weather";
import Ticker from "./components/Ticker";
import GetLocation from "./components/GetLocation";
import Menu from "./components/Menu";

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = `${hours} : ${minutes}${ampm}`;
  return strTime;
}

const dayOptions = {
  month: "long",
  day: "numeric",
  weekday: `short`,
};

const formatInput = (text) => text.replace(/ /g, "%");

export default function App() {
  // ===== State =====

  const [location, setLocation] = React.useState(() => {
    let init = localStorage.getItem("location");
    return init || `duluth%mn`;
  });

  const [coords, setCoords] = React.useState(() => {
    let init = {
      latitude: localStorage.getItem("lat"),
      longitude: localStorage.getItem("long"),
    };
    return (
      init || {
        latitude: `45`,
        longitude: "45",
      }
    );
  });

  const [haveCoords, setHaveCoords] = React.useState(() => {
    let initialValue = JSON.parse(localStorage.getItem("haveCoords"));
    return initialValue || false;
  });

  const [userLocation, setUserLocation] = React.useState("");

  const [enableTicker, setEnableTicker] = React.useState(() => {
    let init = JSON.parse(localStorage.getItem("cryptoTickerEnabled"));
    return init || false;
  });

  const [fOrC, setForC] = React.useState(() => {
    let initialValue = JSON.parse(localStorage.getItem("fOrC"));
    return initialValue || false;
  });

  // ===== end state ======

  //// API call to search for lat - long from user input, location is set in the GetLocation component
  // Setting our haveCoords value (true or false) in local storage
  React.useEffect(() => {
    fetch(
      `https://api.myptv.com/geocoding/v1/locations/by-text?searchText=${location}&apiKey=NDVkZjZlYTFmNWMzNGEyZmIzNzMwMzNkNjkxMDRjMjQ6ZTM5OGNmOGItY2ZlNS00N2ZmLTg5YTAtZGUxMjE2ODMxMDc3`
    )
      .then((res) => res.json())
      .then((data) => {
        setCoords(data.locations[0].referencePosition);
        setUserLocation(data.locations[0].formattedAddress);
      });

    localStorage.setItem("haveCoords", haveCoords);
  }, [haveCoords, location]);

  // Setting coords in local storage anytime our coords state changes
  React.useEffect(() => {
    localStorage.setItem("lat", Number(coords.latitude).toFixed(5));
    localStorage.setItem("long", Number(coords.longitude).toFixed(5));
  }, [coords]);

  // saving the users crypto ticker preferance in local storage

  React.useEffect(() => {
    localStorage.setItem("cryptoTickerEnabled", enableTicker);
  }, [enableTicker]);

  console.log(enableTicker);

  return (
    <>
      <div>
        <Menu
          setHaveCoords={setHaveCoords}
          currentLocation={userLocation}
          haveCoords={haveCoords}
          enableTicker={enableTicker}
          setEnableTicker={setEnableTicker}
          fOrC={fOrC}
          setForC={setForC}
        />
        <div className="top-half">
          <Header formatAMPM={formatAMPM} dayOptions={dayOptions} />
          {haveCoords ? (
            <>
              <Weather coords={coords} fOrC={fOrC} />
            </>
          ) : (
            <>
              <GetLocation
                handleInput={setLocation}
                format={formatInput}
                handleCoords={setHaveCoords}
              />
            </>
          )}
        </div>
        <div className="bottom-half">{enableTicker && <Ticker />}</div>
      </div>
    </>
  );
}
