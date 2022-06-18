import styled from "styled-components";

const StyledDesktop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url(${props => props.theme.wallpaper});
  color: ${props => props.theme.colors.highlight};
  font-family: ${props => props.theme.font};
  background-size: cover;
`;

export default StyledDesktop;