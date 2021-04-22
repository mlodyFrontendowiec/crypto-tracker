import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledView = styled.div`
  max-height: 100vh;
  overflow: hidden;
`;

export const StyledHeader = styled.h1`
  color: white;
  padding: 30px;
  font-size: 40px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  @media (max-width: 1000px) {
    margin-top: 40px;
  }
`;

export const StyledImage = styled.img`
  @media (max-width: 1000px) {
    width: 150px;
    height: 150px;
    margin: 0 auto;
  }
  @media (max-width: 600px) {
    width: 100px;
    height: 100px;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  background-color: #7811f7;
  border-radius: 20px;
  padding: 40px;
  margin: 0 20px;
  width: 80%;
  margin: 0 auto;
  @media (max-width: 1000px) {
    flex-direction: column;
    width: 95%;
  }
`;

export const StyledDiv = styled.div`
  width: 100%;
  @media (max-width: 1000px) {
    margin-top: 30px;
  }
`;
export const StyledText = styled.p`
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  text-align: right;
  margin-bottom: 5px;
  @media (max-width: 1000px) {
    text-align: left;
    font-size: 20px;
  }
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
