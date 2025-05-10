import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar"; /* ✅ 사이드바 추가 */
import Button from "./Button";


const Container = styled.div`
  flex-grow: 1;
  padding: 50px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 375px; /* ✅ 모바일 너비를 강제 적용 */
  margin: auto;
  position: relative;
`;

const Title = styled.h1`
  color: var(--GrayScale-Gray900, #191A1A);
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  text-align: center; /* ✅ 모든 화면에서 중앙 정렬 */
  white-space: pre-line;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 580px;
  left: 50%;
  transform: translateX(-50%);
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* ✅ 내부에서 왼쪽 정렬 적용 */

`;

const Subtitle = styled.p`
  color: var(--GrayScale-Gray500, #7D8080);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
`;

const Home = () => {
  return (
    <Container>
      <Sidebar /> {/* ✅ 사이드바 추가 */}
      <Content>
        <Title>{"노바와 함께하는\n 데이터 윤리 퀴즈 💬"}</Title>
        <Subtitle>데이터 라벨링에 대해서 아시나요? 퀴즈를 풀어봐요!</Subtitle>
        <ButtonWrapper>
          <Button>퀴즈 시작하기</Button>
        </ButtonWrapper>
      </Content>
    </Container>
  );
};

export default Home;