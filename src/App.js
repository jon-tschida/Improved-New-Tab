import React from "react"
import Header from "./components/Header"
import Greeting from "./components/Greeting";


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

  let [curTime, setCurTime] = React.useState(formatAMPM(new Date()));
  let [curDate, setCurDate] = React.useState();

  setInterval(() => {
    setCurTime(formatAMPM(new Date()));
    setCurDate(new Date());
  }, 5000)

  const formatDay = new Intl.DateTimeFormat(`en-US`, dayOptions).format(curDate);


  return (
    <>
      <Header format={formatAMPM} formatDay={formatDay} curTime={curTime} />
      <Greeting />
    </>
  );
}

