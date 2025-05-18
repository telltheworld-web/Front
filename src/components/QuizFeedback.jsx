//퀴즈 -> 피드백-> 관련 기사 보기 클릭하면 페이지 이동하도록 설정한 부분입니다.
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import quizData from "../data/quizData";
import styled from "styled-components";
import Button from "./Button"; // Button 컴포넌트 import


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

  console.log("링크 확인:", quiz.feedback[optionId]?.link);
  console.log("optionId:", optionId);
  console.log("feedback object:", quiz?.feedback?.[optionId]);

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

  const goToArticle = () => {
    const link = quiz.feedback[optionId]?.link; // 안전하게 접근
    if (link && typeof link === "string" && link.trim() !== "") {
      window.open(link, "_blank");
    } else {
      console.error("유효하지 않은 링크:", link); // 디버깅용 로그
      alert("유효한 링크가 없습니다.");
    }
  };
  
  
  return (
    <Container>
      <Image src={image} alt="feedback" />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <div
        className="w-72 justify-start text-teal-400 text-base font-medium font-['Pretendard'] underline leading-normal"
        onClick={goToArticle}
        style={{ cursor: "pointer" }}
      >
        &gt; 관련 기사 보러가기
      </div>
      <br />
      <Button onClick={goToNext}>다음</Button>

    </Container>
  );
};

export default QuizFeedback;