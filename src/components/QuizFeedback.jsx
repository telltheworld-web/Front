import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import quizData from "../data/quizData";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  max-width: 375px;
  margin: 0 auto;
  min-height: 100vh;
  background: linear-gradient(180deg, #f9fcfc 0%, #daf2f2 100%);
  padding: 32px 16px;
  box-sizing: border-box;
  
`;

const Image = styled.img`
  width: 160px;
  height: auto;
  margin: 0 auto 24px;
  display: block;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #191a1a;
  margin-bottom: 12px;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #191a1a;
  margin-bottom: 12px;
  align-item:left
`;

const DescriptionBox = styled.div`
  background: #ffffff;
  border: 1px solid #c8cccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 13px;
  color: #252626;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  
`;

const ArticleLink = styled.div`
  color: #1cb0b0;
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;
  margin: 16px 0 32px;
  cursor: pointer;
  text-align: center;
`;

const TableContainer = styled.div`
  background-color: #ffffff;
  border: 2px solid #c8cccc;
  border-radius: 8px;
  margin: 24px 0;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  color: #252626;
`;

const TableHeader = styled.div`
  display: flex;
  font-weight: 600;
  border-bottom: 1px solid #c8cccc;
  padding-bottom: 8px;
  margin-bottom: 8px;
  gap: 8px;
  text-align: center;
  color: #47B2B2
`;

const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  gap: 8px;
  margin-bottom: 6px;
  padding: 8px 0; // ← 줄간격 조정
  border-bottom: 1px solid #f0f0f0;
`;

const Col = styled.div`
  flex: 1;
`;

const QuizFeedback = () => {
  const { quizId, optionId } = useParams();
  const quiz = quizData.find(q => q.id === parseInt(quizId));
  const navigate = useNavigate();

  if (!quiz || !quiz.feedback[optionId]) return <div>페이지를 찾을 수 없습니다.</div>;

  const { title, subtitle, description, image, link } = quiz.feedback[optionId];

  const goToNext = () => {
    const nextQuizId = quiz.id + 1;
    const hasNext = quizData.some(q => q.id === nextQuizId);
    if (hasNext) {
      navigate(`/quiz/${nextQuizId}`);
    } else {
      navigate("/result");
    }
  };

  const goToArticle = () => {
    if (link && typeof link === "string" && link.trim() !== "") {
      window.open(link, "_blank");
    } else {
      alert("유효한 링크가 없습니다.");
    }
  };

  return (
    <Container>
      <Image src={image} alt="feedback" />
      <Title>{title}</Title>

      <Subtitle>{subtitle}</Subtitle>
      
      {/* 퀴즈 4번일 때만 표 표시 */}
      {parseInt(quizId) === 4 && (
        <TableContainer>
          <TableHeader>
            <Col>선진국 라벨러</Col>
            <Col>제 3국 라벨러</Col>
          </TableHeader>
          <TableRow>
            <Col>정규직 또는 프리랜서</Col>
            <Col>아웃소싱(하청 계약)</Col>
          </TableRow>
          <TableRow>
            <Col>전문 교육 제공</Col>
            <Col>최소한의 교육 제공</Col>
          </TableRow>
          <TableRow>
            <Col>시간당 15~25달러</Col>
            <Col>시간당 1~2달러</Col>
          </TableRow>
          <TableRow>
            <Col>근로법 적용</Col>
            <Col>근로법 적용 대상 아님</Col>
          </TableRow>
        </TableContainer>
      )}

      <DescriptionBox>
        <Description>{description}</Description>
      </DescriptionBox>

      <ArticleLink onClick={goToArticle}>{"> 관련 기사 보러가기"}</ArticleLink>
      <Button onClick={goToNext}>다음</Button>
    </Container>
  );
};

export default QuizFeedback;
