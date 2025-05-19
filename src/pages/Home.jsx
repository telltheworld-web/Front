import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const BlockContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2vh 4vw;
  box-sizing: border-box;
`;

const BlockContent = styled.div`
  flex-grow: 1;
  max-width: 720px;
  width: 100%;
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center; /* 중앙 정렬 */
  text-align: left; /* 텍스트 중앙 정렬 */

  @media (max-width: 768px) {
    padding-top: 6vh;
  }
`;

const BlockTitle = styled.h1`
  font-family: Pretendard;
  color: var(--GrayScale-Gray900, #191A1A);
  font-weight: 600;
  font-size: clamp(24px, 6vw, 48px);
  line-height: 1.3;
  margin-bottom: 3vh;
  white-space: pre; /* 줄바꿈 고정 */
`;

const BlockSubtitle = styled.p`
  font-family: Pretendard;
  color: var(--GrayScale-Gray500, #7D8080);
  font-weight: 500;
  font-size: clamp(14px, 3.5vw, 24px);
  line-height: 1.5;
  margin-bottom: 6vh;
  white-space: pre; /* 줄바꿈 고정 */
`;

const BlockButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* 버튼 중앙 정렬 */
  margin-top: 40px; /* QuizStart의 버튼 간격 참고 */
  padding-bottom: 20px;
  width: 100%;
`;

const StyledButton = styled(Button)`
  width: 200px;  /* 버튼 크기 고정 */
  height: 50px;  
  font-size: 16px; 
  border-radius: 8px; /* 부드러운 모서리 */
  background-color: #47B2B2; /* QuizStart 버튼 스타일 참고 */
  color: white;
  font-weight: bold;
  
  @media (max-width: 768px) {
    width: 180px;
    height: 45px;
    font-size: 14px;
  }
`;

const BlockHome = () => {
  const navigate = useNavigate();

  return (
    <>
      <Sidebar />
      <BlockContainer>
        <BlockContent>
          <BlockTitle>{"노바와 함께하는\n데이터 윤리 퀴즈 💬"}</BlockTitle>
          <BlockSubtitle>{"데이터 라벨링에 대해서 아시나요?\n퀴즈를 풀어봐요!"}</BlockSubtitle>
          <BlockButtonWrapper>
            <StyledButton onClick={() => navigate("/start")}>응 좋아!</StyledButton>
          </BlockButtonWrapper>
        </BlockContent>
      </BlockContainer>
    </>
  );
};

export default BlockHome;