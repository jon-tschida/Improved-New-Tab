import React from "react";
import Header from "./components/Header";
import Weather from "./components/Weather";
import Ticker from "./components/Ticker";
import GetLocation from "./components/GetLocation";

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = `${hours} : ${minutes}${ampm}`;
  // var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

const dayOptions = {
  month: "long",
  day: "numeric",
  weekday: `short`,
};

const formatInput = (text) =>text.replace(/ /g, "%");

export default function App() {

  const [location, setLocation] = React.useState(`duluth%mn`)


  const [coords, setCoords] = React.useState({
    latitude: `45`,
    longitude: '45'
  })


  const [haveCoords, setHaveCoords] = React.useState(() =>{
    let initialValue = JSON.parse(localStorage.getItem("haveCoords"));
    return initialValue || false;
  })
  
  React.useEffect(()=>{
  fetch(`https://api.myptv.com/geocoding/v1/locations/by-text?searchText=${location}&apiKey=NDVkZjZlYTFmNWMzNGEyZmIzNzMwMzNkNjkxMDRjMjQ6ZTM5OGNmOGItY2ZlNS00N2ZmLTg5YTAtZGUxMjE2ODMxMDc3`)
  .then(res => res.json())
  .then(data => setCoords(data.locations[0].referencePosition))
}, [location])

React.useEffect(()=>{
  localStorage.setItem("lat", coords.latitude)
  localStorage.setItem("long", coords.longitude)
  localStorage.setItem("haveCoords", haveCoords)
  
}, [haveCoords])
/*
console.log(haveCoords)
console.log(coords)

console.log(location)
*/

return (
    <>
    <div>
      <div className="top-half">
        <Header formatAMPM={formatAMPM} dayOptions={dayOptions} />
        {haveCoords 
        ? 
        <Weather />
        :
        <GetLocation handleInput={setLocation} format={formatInput} handleCoords={setHaveCoords}/>
        }
      </div>
      <div className="bottom-half">
        <Ticker />
      </div>
    </div>
    </>
  );
}
