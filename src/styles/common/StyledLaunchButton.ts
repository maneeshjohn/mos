import styled from "styled-components";

const StyledLaunchButton = styled.button`
  border: none;
  color: ${props => props.theme.colors.highlight};
  background-color: transparent;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  padding: .25rem .75rem;
  height: 100%;
  letter-spacing: .02rem;

  &:hover {
    color: ${props => `${props.theme.colors.highlight}88`};
  }
`;

export default StyledLaunchButton;