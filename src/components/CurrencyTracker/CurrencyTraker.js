import React, { useState } from "react";

import ListItem from "../ListItem/ListItem";
import {
  StyledHeader,
  StyledInput,
  StyledList,
  StyledNotFound,
} from "./StyledCurrencyTraker";

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

export default CurrencyTracker;
