import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import quizData from "../data/quizData";
import styled from "styled-components";

const Container = styled.div`
  max-width: 360px;
  margin: auto;
  padding: 20px;
`;

const Image = styled.img`
  width: 200px;
  margin: 0 auto 20px;
`;

const Question = styled.div`
  font-size: 18px;
  margin-bottom: 24px;
  white-space: pre-line;
`;

const OptionButton = styled.button`
  width: 100%;
  margin-bottom: 12px;
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  background: #47b2b2;
  color: white;
  border: none;
`;

const Quiz = () => {
  const { id } = useParams();
  const quiz = quizData.find(q => q.id === parseInt(id));
  const navigate = useNavigate();

  if (!quiz) return <div>퀴즈가 존재하지 않아요!</div>;

  return (
    <Container>
      <Image src={quiz.image} alt="quiz" />
      <Question>{quiz.question}</Question>
      {quiz.options.map((option, idx) => (
        <OptionButton key={idx} onClick={() => navigate(option.nextPath)}>
          {option.text}
        </OptionButton>
      ))}
    </Container>
  );
};

export default Quiz;