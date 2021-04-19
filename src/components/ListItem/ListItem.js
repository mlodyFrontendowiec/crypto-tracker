import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
      <StyledLink to={`/cryptocurrency/${id}`}>About</StyledLink>
    </StyledListItem>
  );
};

const StyledListItem = styled.li`
  display: flex;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #7811f7;
  margin: 20px;
  border-radius: 10px;
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
  color: ${({ price }) => (price > 0 ? "#00ff00" : "red")};
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
`;

export default ListItem;
