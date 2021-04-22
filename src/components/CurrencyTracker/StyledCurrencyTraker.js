import styled from "styled-components";

export const StyledHeader = styled.h1`
  font-size: 30px;
  font-family: "Roboto", sans-serif;
  color: white;
  position: absolute;
  top: 18%;
  text-align: center;
  width: 100%;
`;

export const StyledInput = styled.input`
  font-size: 25px;
  padding: 5px 10px;
  outline: none;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translateX(-50%);
  font-family: "Roboto", sans-serif;
`;

export const StyledList = styled.ul`
  transform: translateY(400px);
  width: 100%;
  margin: 0 auto;
  padding-bottom: 20px;
  background-color: #19181c;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledNotFound = styled.h1`
  color: white;
  font-family: "Roboto", sans-serif;
  text-align: center;
`;
