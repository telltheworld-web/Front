import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import quizData from "../data/quizData";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(180deg, #f9fcfc 0%, #daf2f2 100%);
  padding: 24px 0;
`;

const InnerWrapper = styled.div`
  width: 375px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 48px);
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  padding: 24px 16px 0 16px;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`;

const Title = styled.h2`
  color: #252626;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 16px;
`;

const Image = styled.img`
  width: 160px;
  height: auto;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  color: #252626;
  text-align: left; 
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  margin-bottom: 22px;
`;

const TableContainer = styled.table`
  width: 312px;
  border-collapse: collapse;
  border: 2px solid var(--GrayScale-Gray100, #EDF2F2);
  border-radius: 12px; /* 둥근 모서리 */
  background: var(--GrayScale-Gray000, #F9FCFC); /* 배경색 적용 */
  box-shadow: 0px 0px 13.1px 0px rgba(71, 178, 178, 0.13); /* 그림자 효과 */
  margin-bottom: 32px;
`;

const TableHeader = styled.thead`

`;

const TableRow = styled.tr`
  border-bottom: 2px solid var(--GrayScale-Gray100, #EDF2F2);
`;

const TableHeaderCol = styled.th`
  padding: 16px;
  color: var(--Primary-Primary001, #47B2B2);
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  text-align: center;
  border: 2px solid var(--GrayScale-Gray100, #EDF2F2);
`;

const TableData = styled.td`
  padding: 16px;
  color: var(--GrayScale-Gray800, #252626);
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 500;
  line-height: 17px;
  text-align: center;
  border: 2px solid var(--GrayScale-Gray100, #EDF2F2);
`;

const DescriptionBox = styled.div`
  border-radius: 12px;
  background: #f9fcfc;
  box-shadow: 0px 0px 13.1px rgba(71, 178, 178, 0.13);
  display: flex;
  width: 312px;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 48px;
`;

const Description = styled.p`
  font-size: 15px;
  color: #252626;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 24px;
  white-space: pre-line;
  text-align: left;
  width: 100%;
`;

const ArticleLink = styled.div`
  color: #47b2b2;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration: underline;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 16px 32px 16px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  max-width: 312px;
`;

const QuizFeedback = () => {
  const { quizId, optionId } = useParams();
  const quiz = quizData.find((q) => q.id === parseInt(quizId));
  const navigate = useNavigate();

  if (!quiz || !quiz.feedback[optionId]) return <div>페이지를 찾을 수 없습니다.</div>;

  const { title, subtitle, description, image, link } = quiz.feedback[optionId];
  const hasTable = parseInt(quizId) === 4;

  const goToNext = () => {
    const nextQuizId = quiz.id + 1;
    const hasNext = quizData.some((q) => q.id === nextQuizId);
    navigate(hasNext ? `/quiz/${nextQuizId}` : "/result");
  };

  const goToArticle = () => {
    if (link && typeof link === "string" && link.trim() !== "") {
      link.startsWith("/") ? navigate(link) : window.open(link, "_blank");
    } else {
      alert("유효한 링크가 없습니다.");
    }
  };

  return (
    <Container>
      <InnerWrapper>
        <ContentWrapper>
          <Title>{title}</Title>
          <Image src={image} alt="feedback" />
          <Subtitle>{subtitle}</Subtitle>

          {hasTable && (
            <TableContainer>
              <TableHeader>
                <TableRow>
                  <TableHeaderCol>선진국 라벨러</TableHeaderCol>
                  <TableHeaderCol>제 3국 라벨러</TableHeaderCol>
                </TableRow>
              </TableHeader>
              <tbody>
                <TableRow>
                  <TableData>정규직 또는 프리랜서</TableData>
                  <TableData>아웃소싱(하청 계약)</TableData>
                </TableRow>
                <TableRow>
                  <TableData>전문 교육 제공</TableData>
                  <TableData>최소한의 교육 제공</TableData>
                </TableRow>
                <TableRow>
                  <TableData>시간당 15~25달러</TableData>
                  <TableData>시간당 1~2달러</TableData>
                </TableRow>
                <TableRow>
                  <TableData>근로법 적용</TableData>
                  <TableData>근로법 적용 대상 아님</TableData>
                </TableRow>
              </tbody>
            </TableContainer>
          )}

          <DescriptionBox>
            <Description>{description}</Description>
            <ArticleLink onClick={goToArticle}>{"> 관련 기사 보러가기"}</ArticleLink>
          </DescriptionBox>
        </ContentWrapper>

        <ButtonWrapper>
          <StyledButton onClick={goToNext}>다음</StyledButton>
        </ButtonWrapper>
      </InnerWrapper>
    </Container>
  );
};

export default QuizFeedback;