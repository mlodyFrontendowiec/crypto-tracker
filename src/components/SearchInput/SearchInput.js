import React from "react";
import styled from "styled-components";

const SearchInput = () => {
  return (
    <>
      <StyledHeader>Search a currency</StyledHeader>
      <StyledInput placeholder="Search" type="text" />
    </>
  );
};
const StyledHeader = styled.h1`
  font-size: 30px;
  font-family: "Roboto", sans-serif;
  color: white;
  position: absolute;
  left: 50%;
  top: 18%;
  transform: translateX(-50%);
`;

const StyledInput = styled.input`
  font-size: 25px;
  padding: 5px 10px;
  outline: none;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translateX(-50%);
  font-family: "Roboto", sans-serif;
`;

export default SearchInput;
