// Quiz.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import quizData from "../data/quizData";
import styled from "styled-components";

const Container = styled.div`
  max-width: 375px;
  margin: 0 auto;
  min-height: 100vh;
  background: linear-gradient(180deg, #f9fcfc 0%, #daf2f2 100%);
  padding: 32px 16px 120px; /* 아래 공간 확보 */
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const Image = styled.img`
  width: 160px;
  height: auto;
  margin-bottom: 24px;
`;

const NumberText = styled.div`
  color: var(--Primary-Primary001, #47b2b2);
  text-align: center;
  font-family: Pretendard, sans-serif;
  font-style: normal;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 8px;
`;

const Question = styled.h2`
  font-weight: 500;
  color: #191a1a;
  text-align: center;
  line-height: 1.6;
  margin-bottom: 32px;
  white-space: pre-line;
  font-size: clamp(16px, 4vw, 22px);
  word-break: keep-all;
  overflow-wrap: normal;
`;

const Description = styled.p`
  color: var(--GrayScale-Gray800, #252626);
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 24px;
  text-align: center;
`;

const OptionsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// 하얀 버튼 스타일 (위쪽 버튼)
const ButtonWhiteStyled = styled.button`
  position: fixed;
  bottom: 100px; /* 아래 버튼(16px) + 버튼 높이 + 간격 8px 정도 맞춤 */
  left: 50%;
  transform: translateX(-50%);
  width: 312px;
  display: flex;
  padding: 20px 0;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: var(--GrayScale-Gray000, #F9FCFC);
  color: var(--GrayScale-Gray500, #7D8080);
  box-shadow: 0px 0px 13.1px 0px rgba(71, 178, 178, 0.13);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px; /* 116.667% */
  border: none;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #e0f2f2;
  }
`;

// 기본 버튼 스타일 (맨 아래 버튼)
const OptionButtonStyled = styled.button`
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: 312px;
  display: flex;
  padding: 20px 0;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: var(--Primary-Primary001, #47B2B2);
  box-shadow: 0px 0px 13.1px 0px rgba(71, 178, 178, 0.13);
  color: white;
  font-family: Pretendard, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  font-style: normal;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #3aa0a0;
  }
`;

const Quiz = () => {
  const { id } = useParams();
  const quiz = quizData.find((q) => q.id === parseInt(id));
  const navigate = useNavigate();

  if (!quiz) return <Container>퀴즈가 존재하지 않아요!</Container>;

  return (
    <Container>
      <NumberText>{`Q${quiz.id}.`}</NumberText>
      <Question>{quiz.question}</Question>
      {quiz.description && <Description>{quiz.description}</Description>}
      <Image src={quiz.image} alt="퀴즈 이미지" />
      <OptionsWrapper>
        {/* 하얀 버튼 */}
        <ButtonWhiteStyled onClick={() => navigate(quiz.options[0].nextPath)}>
          {quiz.options[0].text}
        </ButtonWhiteStyled>

        {/* 기본 버튼 */}
        <OptionButtonStyled onClick={() => navigate(quiz.options[1].nextPath)}>
          {quiz.options[1].text}
        </OptionButtonStyled>
      </OptionsWrapper>
    </Container>
  );
};

export default Quiz;
