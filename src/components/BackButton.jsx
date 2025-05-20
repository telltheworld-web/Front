import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

const Button = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    user-select: none;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }

  @media (max-width: 480px) {
    width:28px;
    height: 28px;
  }
`;

const BackButton = () => {
  const navigate = useNavigate();
  const { quizId } = useParams();

  const handleClick = () => {
    if (quizId) {
      const prevId = parseInt(quizId) - 1;
      if (prevId > 0) {
        navigate(`/quiz/${prevId}`);
      } else {
        navigate("/articles");  // 첫 문제 이전은 기사 목록으로
      }
    } else {
      navigate(-1);  // 그 외에는 히스토리 뒤로
    }
  };

  return (
    <Button onClick={handleClick} aria-label="이전 페이지로 이동">
      <img
        src="/images/Vector (1).svg"
        alt="뒤로가기 아이콘"
        draggable={false}
      />
    </Button>
  );
};

export default BackButton;
