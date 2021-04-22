import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const StyledView = styled.div`
  max-height: 100vh;
  overflow: hidden;
`;

const StyledHeader = styled.h1`
  color: white;
  padding: 30px;
  font-size: 40px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  @media (max-width: 1000px) {
    margin-top: 40px;
  }
`;

const StyledImage = styled.img`
  @media (max-width: 1000px) {
    width: 150px;
    height: 150px;
    margin: 0 auto;
  }
  @media (max-width: 600px) {
    width: 100px;
    height: 100px;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  background-color: #7811f7;
  border-radius: 20px;
  padding: 40px;
  margin: 0 20px;
  width: 80%;
  margin: 0 auto;
  @media (max-width: 1000px) {
    flex-direction: column;
    width: 95%;
  }
`;

const StyledDiv = styled.div`
  width: 100%;
  @media (max-width: 1000px) {
    margin-top: 30px;
  }
`;
const StyledText = styled.p`
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  text-align: right;
  margin-bottom: 5px;
  @media (max-width: 1000px) {
    text-align: left;
    font-size: 20px;
  }
`;

const StyledLink = styled(Link)`
  position: absolute;
  text-decoration: none;
  top: 20px;
  left: 20px;
  font-family: "Roboto", sans-serif;
  color: white;
  font-size: 20px;
  :hover {
    color: #7811f7;
  }
`;

export default DetailsView;
