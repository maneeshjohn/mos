import React, { useState, useEffect } from "react";
import moment from "moment";

import { StyledClock } from "../../styles/common";

const ONE_SECOND = 1000;
const ONE_MINUTE = 60 * ONE_SECOND;

const Clock:React.FC = () => {

  const [time, setTime] = useState<string>("");

  const parseTime = () => {
    setTime(moment().format("hh:mm A"));
  }

  useEffect(() => {
    parseTime();
    const timeoutId = setInterval(() => {
      parseTime();
    }, ONE_MINUTE);
    return () => clearInterval(timeoutId);
  }, []);

  return <StyledClock>{time}</StyledClock>;
}

export default Clock;