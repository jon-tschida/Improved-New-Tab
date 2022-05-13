import React from "react";
import Greeting from "./Greeting";

export default function Header(props) {
  let [curTime, setCurTime] = React.useState(new Date());
  let [curDate, setCurDate] = React.useState();

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurTime(new Date());
      setCurDate(new Date());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const formatDay = new Intl.DateTimeFormat(`en-US`, props.dayOptions).format(
    curDate
  );

  return (
    <div>
      <div className="date-time">
        <p className="time">{props.formatAMPM(curTime)}</p>
        <p className="date">{formatDay}</p>
      </div>
      <Greeting time={curTime} />
    </div>
  );
}
