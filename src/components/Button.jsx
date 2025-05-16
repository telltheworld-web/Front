import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  width: 80vw;
  width: 312px;
  height: 61px;  /* 버튼 높이 고정 */
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: var(--Primary-Primary001, #47B2B2);
  box-shadow: 0px 0px 13.1px 0px rgba(71, 178, 178, 0.13);
  color: white;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  font-size: clamp(12px, 4vw, 16px);

  &:hover {
    background: #3AA0A0;
  }
`;

const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
