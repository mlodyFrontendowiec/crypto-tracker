import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";

const DetailsView = ({ currencyList }) => {
  let { name } = useParams();
  const currency = currencyList.find((item) => item.id === name);
  return <StyledHeader>{currency.name}</StyledHeader>;
};

const StyledHeader = styled.h1`
  color: white;
  padding: 30px;
  font-size: 40px;
  text-align: center;
  font-family: "Roboto", sans-serif;
`;

export default DetailsView;
