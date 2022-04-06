import React, { useState, useEffect } from "react";

import { StyledClock } from "../../styles/common";

const Clock:React.FC = () => {

  const [time, setTime] = useState<string>("");

  const parseTime = (time: Date) => {
    let hours = time.getHours();
    let minutes = time.getSeconds();
    setTime(`${hours < 10? "0" + hours: hours}:${minutes < 10? "0" + minutes: minutes}`);
  }

  useEffect(() => {
    // parseTime(new Date());
    const timer = setInterval(() => {
      console.log("timer")
      parseTime(new Date())
    }, 1000);
    return clearInterval(timer);
  }, []);

  return <StyledClock>{time}</StyledClock>;
}

export default Clock;