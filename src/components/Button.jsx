import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  width: 312px;
  padding: 20px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: var(--Primary-Primary001, #47B2B2);

  /* Shadow1 */
  box-shadow: 0px 0px 13.1px 0px rgba(71, 178, 178, 0.13);
  color: white;
  font-size: 16px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #3AA0A0;
  }
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;