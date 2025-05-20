import React from "react";
import styled from "styled-components";

const StyledWhiteButton = styled.button`
  background-color: #f9fcfc;
  color: #47b2b2;
  padding: 16px;
  border-radius: 12px;
  font-size: clamp(14px, 3vw, 18px);
  font-weight: 600;
  border: none;  /* ← 테두리 제거 */
  cursor: pointer;
  transition: 0.2s;
  white-space: pre-line;
  text-align: center;
  margin-bottom: 8px;

  &:hover {
    background-color: #e5f8f8;
  }
`;

const ButtonWhite = ({ children, onClick }) => {
  return <StyledWhiteButton onClick={onClick}>{children}</StyledWhiteButton>;
};

export default ButtonWhite;
