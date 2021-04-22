import React from "react";
import { useParams } from "react-router";

import {
  StyledHeader,
  StyledContainer,
  StyledView,
  StyledText,
  StyledLink,
  StyledDiv,
  StyledImage,
} from "./StyledDetailsView";

const DetailsView = ({ currencyList }) => {
  let { name } = useParams();

  const currency = currencyList.find((item) => item.id === name);

  return (
    <StyledView>
      <StyledHeader>{currency.name}</StyledHeader>
      <StyledLink to="/">Back to all</StyledLink>
      <StyledContainer>
        <StyledImage src={currency.image} />
        <StyledDiv>
          <StyledText>Price: {currency.current_price} $</StyledText>
          <StyledText>Marketcap: {currency.market_cap} $</StyledText>
          <StyledText>Total supply: {currency.total_supply} </StyledText>
          <StyledText>High in 24 hours: {currency.high_24h} $</StyledText>
          <StyledText>Low in 24 hours: {currency.low_24h} $</StyledText>
          <StyledText>ATH: {currency.ath} $</StyledText>
        </StyledDiv>
      </StyledContainer>
    </StyledView>
  );
};

export default DetailsView;
