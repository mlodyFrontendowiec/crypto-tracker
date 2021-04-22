import { Link } from "react-router-dom";
import styled from "styled-components";

export const AppContainer = styled.div`
  background-color: #19181c;
  margin: 0;
  padding: 0;
  height: auto;
  min-height: 100vh;
`;

export const StyledLink = styled(Link)`
  position: absolute;
  text-decoration: none;
  top: 20px;
  right: 20px;
  font-family: "Roboto", sans-serif;
  color: white;
  font-size: 20px;
  :hover {
    color: #7811f7;
  }
`;
