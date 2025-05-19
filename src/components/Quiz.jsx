import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import quizData from "../data/quizData";
import styled from "styled-components";

const Container = styled.div`
  max-width: 375px;
  margin: 0 auto;
  min-height: 100vh;
  background: linear-gradient(180deg, #f9fcfc 0%, #daf2f2 100%);
  padding: 32px 16px;
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

const Question = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: #191a1a;
  text-align: center;
  line-height: 1.6;
  white-space: pre-line;
  margin-bottom: 32px;
`;

const OptionsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const OptionButton = styled.button`
  background-color: #47b2b2;
  color: white;
  padding: 16px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #3aa0a0;
  }
`;

const Quiz = () => {
  const { id } = useParams();
  const quiz = quizData.find(q => q.id === parseInt(id));
  const navigate = useNavigate();

  if (!quiz) return <Container>퀴즈가 존재하지 않아요!</Container>;

  return (
    <Container>
      <Image src={quiz.image} alt="퀴즈 이미지" />
      <Question>{quiz.question}</Question>
      <OptionsWrapper>
        {quiz.options.map((option, idx) => (
          <OptionButton key={idx} onClick={() => navigate(option.nextPath)}>
            {option.text}
          </OptionButton>
        ))}
      </OptionsWrapper>
    </Container>
  );
};

export default Quiz;
