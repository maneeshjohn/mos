import styled from "styled-components";

const StyledTaskbar = styled.div`
  position: fixed;
  height: 3rem;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.highlight};
  display: flex;
  align-items: center;
  padding: 0 .5rem;
`;

export default StyledTaskbar;