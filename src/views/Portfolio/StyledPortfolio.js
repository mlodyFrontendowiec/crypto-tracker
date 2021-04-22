import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledView = styled.div`
  max-height: 100vh;
  overflow: hidden;
`;
export const StyledLink = styled(Link)`
  position: absolute;
  text-decoration: none;
  top: 20px;
  left: 20px;
  font-family: "Roboto", sans-serif;
  color: white;
  font-size: 20px;
  :hover {
    color: #7811f7;
  }
`;

export const StyledHeader = styled.h1`
  font-size: 40px;
  color: white;
  font-family: "Roboto", sans-serif;
  text-align: center;
  margin-top: 60px;
`;

export const StyledParagraph = styled.p`
  font-size: 25px;
  font-family: "Roboto", sans-serif;
  margin-top: 60px;
  color: white;
  text-align: center;
`;
