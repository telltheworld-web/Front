import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 312px;
  padding: 20px 0;
  border-radius: 12px;
  background: var(--Primary-Primary001, #47B2B2);
  box-shadow: 0px 0px 13.1px 0 rgba(71, 178, 178, 0.13);
  color: var(--GrayScale-Gray000, #F9FCFC);

  font-family: Pretendard, sans-serif;
  font-size: ${({ size }) => size || "18px"};
  font-style: normal;
  font-weight: ${({ weight }) => weight || 700};
  line-height: 21px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  /* 화면 하단에서 16px 위에 고정 */
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  &:hover {
    background: #3aa0a0;
  }
`;

const Button = ({ children, onClick, size, weight }) => {
  return (
    <StyledButton onClick={onClick} size={size} weight={weight}>
      {children}
    </StyledButton>
  );
};

export default Button;
