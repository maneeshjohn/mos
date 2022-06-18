import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCentos } from "@fortawesome/free-brands-svg-icons";

import { StyledLaunchButton } from "../../styles/common";

const LaunchButton:React.FC = () => {
  return(
    <StyledLaunchButton>
      <FontAwesomeIcon icon={faCentos} />
    </StyledLaunchButton>
  );
}

export default LaunchButton;