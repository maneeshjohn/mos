import styled from "styled-components";

const StyledLaunchButton = styled.button`
  border: none;
  color: ${props => props.theme.colors.highlight};
  background-color: transparent;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  padding: .25rem;
  height: 100%;
  letter-spacing: .02rem;
`;

export default StyledLaunchButton;