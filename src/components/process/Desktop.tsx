import React from "react";

import StyledDesktop from "../../styles/StyledDesktop";
import ProcessLoader from "./ProcessLoader";

const Desktop:React.FC = () => {

  return(
    <StyledDesktop>
      <ProcessLoader />
    </StyledDesktop>
  );
}

export default Desktop;