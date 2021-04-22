import styled from "styled-components";

export const StyledFormContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const StyledForm = styled.form`
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

export const StyledLabel = styled.label`
  font-size: 18px;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
  @media (max-width: 800px) {
    font-size: 12px;
  }
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  color: white;
  margin-top: 40px;
  margin-right: 50px;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
  @media (max-width: 800px) {
    font-size: 12px;
  }
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

export const StyledFormButton = styled.button`
  margin-top: 15px;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  background-color: white;
  border: none;
  padding: 5px 10px;
  font-weight: bold;
  color: #7811f7;
  cursor: pointer;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
  @media (max-width: 800px) {
    font-size: 12px;
  }
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

export const StyledInput = styled.input`
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  margin-left: 2px;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
  @media (max-width: 800px) {
    font-size: 12px;
  }
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;
