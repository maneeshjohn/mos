import React from "react";

import { StyledTaskbar } from "../../styles";
import {
  LaunchButton,
  FullFlex,
  Clock
} from "../common";

const Taskbar:React.FC = () => {
  return(
    <StyledTaskbar>
      <LaunchButton />
      <FullFlex />
      <Clock />
    </StyledTaskbar>
  );
}

export default Taskbar;