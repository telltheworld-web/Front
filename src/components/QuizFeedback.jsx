import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import quizData from "../data/quizData";
import styled from "styled-components";

const Container = styled.div`
  max-width: 360px;
  margin: auto;
  padding: 20px;
  text-align: center;
`;

const Image = styled.img`
  width: 180px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 12px;
`;

const Description = styled.p`
  white-space: pre-line;
  margin-bottom: 24px;
`;

const NextButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background: #47b2b2;
  color: white;
  border: none;
  border-radius: 8px;
`;

const QuizFeedback = () => {
  const { quizId, optionId } = useParams();
  const quiz = quizData.find(q => q.id === parseInt(quizId));
  const navigate = useNavigate();

  if (!quiz || !quiz.feedback[optionId]) return <div>페이지를 찾을 수 없습니다.</div>;

  const { title, description, image } = quiz.feedback[optionId];

  const goToNext = () => {
    const nextQuizId = quiz.id + 1;
    const hasNext = quizData.some(q => q.id === nextQuizId);
    if (hasNext) {
      navigate(`/quiz/${nextQuizId}`);
    } else {
      navigate("/result"); // 마지막 퀴즈 이후 결과 페이지 등
    }
  };

  return (
    <Container>
      <Image src={image} alt="feedback" />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <NextButton onClick={goToNext}>다음</NextButton>
    </Container>
  );
};

export default QuizFeedback;