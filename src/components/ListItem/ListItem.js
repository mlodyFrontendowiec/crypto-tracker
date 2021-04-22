import React, { useState } from "react";
import Form from "../Form/Form";

import {
  StyledListItem,
  StyledImageItem,
  StyledText,
  StyledTextPrice,
  StyledLink,
  StyledButton,
  StyledDropdown,
} from "./StyledListItem";

const ListItem = ({
  id,
  image,
  name,
  symbol,
  current_price,
  price_change_percentage_24h,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropDown = (e) => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <StyledListItem>
        <StyledImageItem src={image} alt={name} />
        <StyledText>{name}</StyledText>
        <StyledText>{symbol.toUpperCase()}</StyledText>
        <StyledText>${current_price}</StyledText>
        <StyledTextPrice price={price_change_percentage_24h}>
          {price_change_percentage_24h.toFixed(2)}%
        </StyledTextPrice>
        <StyledButton onClick={handleDropDown}>Add to portfolio</StyledButton>
        <StyledLink to={`/cryptocurrency/${id}`}>About</StyledLink>
      </StyledListItem>
      {isOpen && (
        <StyledDropdown isOpen={isOpen}>
          <Form currentPrice={current_price} currency={name} />
        </StyledDropdown>
      )}
    </>
  );
};

export default ListItem;
