import React, { useContext } from "react";
import styled from "styled-components";
import AppContext from "../../context/AppContext";
import ListItem from "../ListItem/ListItem";

const CurrencyList = () => {
  const currencyList = useContext(AppContext);

  return (
    <StyledList>
      {currencyList.map((item) => (
        <ListItem key={item.id} {...item} />
      ))}
    </StyledList>
  );
};

const StyledList = styled.ul`
  width: 60%;
  margin: 0 auto;
`;

export default CurrencyList;
