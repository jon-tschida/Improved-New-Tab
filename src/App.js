import React from "react"
import Header from "./components/Header"
import Greeting from "./components/Greeting";
import Weather from "./components/Weather";


function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

const dayOptions = {
  month: "long",
  day: "numeric",
};

export default function App() {


  return (
    <>
      <Header formatAMPM={formatAMPM} dayOptions={dayOptions} />
      <Weather />
    </>
  );
}

