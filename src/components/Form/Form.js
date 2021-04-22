import React, { useState, useContext } from "react";

import AppContext from "../../context/AppContext";
import {
  StyledFormButton,
  StyledFormContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledParagraph,
} from "./StyledForm";

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
      // value: parseFloat((quantity * currentPrice).toFixed(2)),
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

export default Form;
