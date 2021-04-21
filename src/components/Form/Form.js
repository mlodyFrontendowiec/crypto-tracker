import React, { useState, useContext } from "react";
import styled from "styled-components";
import AppContext from "../../context/AppContext";

const Form = ({ currency, currentPrice }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToPortfolio } = useContext(AppContext);

  const handleInputChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addToPortfolio({
      name: currency,
      quantity: quantity,
      currentPrice: quantity * currentPrice,
    });
    setQuantity(0);
  };

  return (
    <StyledFormContainer>
      <StyledForm onSubmit={handleFormSubmit}>
        <StyledLabel>
          Quantity:
          <StyledInput
            type="number"
            value={quantity}
            onChange={handleInputChange}
          />
        </StyledLabel>
        <br />
        <StyledFormButton>Add cryptocurrency</StyledFormButton>
      </StyledForm>
      <StyledParagraph>
        Price: {(quantity * currentPrice).toFixed(2)} $
      </StyledParagraph>
    </StyledFormContainer>
  );
};

const StyledFormContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;

const StyledForm = styled.form`
  margin-top: 40px;
  font-family: "Roboto", sans-serif;
  margin-left: 20px;
  color: white;
  animation: showing 0.5s;
  @keyframes showing {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const StyledLabel = styled.label`
  font-size: 18px;
`;

const StyledParagraph = styled.p`
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  color: white;
  margin-top: 40px;
  margin-right: 40px;
`;

const StyledFormButton = styled.button`
  margin-top: 15px;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  background-color: white;
  border: none;
  padding: 5px 10px;
  font-weight: bold;
  color: #7811f7;
  cursor: pointer;
`;

const StyledInput = styled.input`
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  margin-left: 2px;
`;

export default Form;
