import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledListItem = styled.li`
  display: flex;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #7811f7;
  margin: 20px;
  border-radius: 10px;
  @media (max-width: 1920px) {
    width: 70%;
  }
  @media (max-width: 1000px) {
    width: 90%;
  }
  @media (max-width: 600px) {
    font-size: 10px;
    margin: 10px;
  }
  @media (max-width: 450px) {
    font-size: 8px;
    margin: 8px;
  }
`;

export const StyledImageItem = styled.img`
  width: 40px;
  height: 40px;
  @media (max-width: 1000px) {
    width: 30px;
    height: 30px;
  }
  @media (max-width: 600px) {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 450px) {
    width: 15px;
    height: 15px;
  }
`;

export const StyledText = styled.p`
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  text-align: left;
  width: 15%;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
  @media (max-width: 800px) {
    font-size: 12px;
  }
  @media (max-width: 600px) {
    font-size: 10px;
  }
  @media (max-width: 400px) {
    font-size: 8px;
  }
`;
export const StyledTextPrice = styled.p`
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  text-align: left;
  width: 15%;
  text-align: center;
  color: ${({ price }) => (price > 0 ? "#00ff00" : "red")};
  @media (max-width: 1000px) {
    font-size: 15px;
  }
  @media (max-width: 800px) {
    font-size: 12px;
  }
  @media (max-width: 600px) {
    font-size: 10px;
  }
  @media (max-width: 390px) {
    font-size: 6px;
  }
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
  @media (max-width: 800px) {
    font-size: 12px;
  }
  @media (max-width: 600px) {
    font-size: 10px;
  }
  @media (max-width: 450px) {
    font-size: 8px;
  }
  @media (max-width: 350px) {
    font-size: 6px;
  }
`;

export const StyledButton = styled.button`
  font-family: "Roboto", sans-serif;
  background-color: none;
  border: 2px solid #7811f7;
  background-color: #7811f7;
  color: white;
  cursor: pointer;
  outline: none;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
  @media (max-width: 800px) {
    font-size: 12px;
  }
  @media (max-width: 600px) {
    font-size: 10px;
  }
  @media (max-width: 450px) {
    font-size: 8px;
  }
`;

export const StyledDropdown = styled.div`
  background-color: #7811f7;

  position: relative;
  top: -50px;
  z-index: -1;
  border-radius: 20px;
  @keyframes growing {
    0% {
      height: 0;
    }
    100% {
      height: 200px;
    }
  }
  @keyframes shrink {
    0% {
      height: 200px;
    }
    100% {
      height: 0;
    }
  }
  animation: ${({ isOpen = false }) =>
    isOpen === false ? "shrink 0.2s forwards" : "growing 0.5s forwards"};
  @media (max-width: 1920px) {
    width: 70%;
  }
  @media (max-width: 1000px) {
    width: 90%;
  }
`;
