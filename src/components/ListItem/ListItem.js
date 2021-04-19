import React from "react";
import styled from "styled-components";

const ListItem = ({
  id,
  image,
  name,
  symbol,
  current_price,
  market_cap,
  price_change_percentage_24h,
}) => {
  return (
    <StyledListItem>
      <StyledImageItem src={image} alt={name} />
      <StyledText>{name}</StyledText>
      <StyledText>{symbol.toUpperCase()}</StyledText>
      <StyledText>${current_price}</StyledText>
      <StyledText>Marketcap ${market_cap}</StyledText>
      <StyledTextPrice price={price_change_percentage_24h}>
        {price_change_percentage_24h.toFixed(2)}%
      </StyledTextPrice>
    </StyledListItem>
  );
};

const StyledListItem = styled.li`
  display: flex;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledImageItem = styled.img`
  width: 40px;
  height: 40px;
`;

const StyledText = styled.p`
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  text-align: left;
  width: 15%;
`;
const StyledTextPrice = styled.p`
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  text-align: left;
  width: 15%;
  color: ${({ price }) => (price > 0 ? "green" : "red")};
`;

export default ListItem;
