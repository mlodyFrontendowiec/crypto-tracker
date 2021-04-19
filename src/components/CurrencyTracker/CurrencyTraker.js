import React, { useState } from "react";
import styled from "styled-components";

import ListItem from "../ListItem/ListItem";

const CurrencyTracker = ({ currencyList }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInput = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  const currencyListComponent = currencyList
    .filter((item) => item.name.toLowerCase().includes(searchValue))
    .map((item) => <ListItem key={item.id} {...item} />);

  return (
    <>
      <StyledHeader>Search a currency</StyledHeader>
      <StyledInput
        placeholder="Search"
        type="text"
        value={searchValue}
        onChange={handleInput}
      />
      <StyledList>
        {currencyListComponent.length === 0 ? (
          <StyledNotFound>Not found</StyledNotFound>
        ) : (
          currencyListComponent
        )}
      </StyledList>
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

const StyledList = styled.ul`
  transform: translateY(400px);
  width: 100%;
  margin: 0 auto;
  padding-bottom: 40px;
  background-color: #19181c;
  height: auto;
`;

const StyledNotFound = styled.h1`
  color: white;
  font-family: "Roboto", sans-serif;
`;

export default CurrencyTracker;