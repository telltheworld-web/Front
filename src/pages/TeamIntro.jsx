import React from "react";
import styled from "styled-components";
import Button from "../components/Button"; // 재사용 버튼 컴포넌트

const Container = styled.div`
  max-width: 375px;
  width: 90vw;
  margin: 0 auto;
  padding: clamp(16px, 5vw, 24px) clamp(16px, 5vw, 24px) clamp(48px, 10vw, 80px);
  background: linear-gradient(180deg, #F9FCFC 0%, #DAF2F2 100%);
  min-height: 100vh;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center; /* 세로 중앙 정렬 */
  align-items: center;     /* 가로 중앙 정렬 */
`;

const TitleGroup = styled.div`
  width: 100%;
  max-width: 312px;
  text-align: left;
  margin-bottom: clamp(12px, 3vw, 16px);
`;


const School = styled.p`
  font-style: normal;
  font-size: clamp(12px, 2.5vw, 16px);
  color: #7D8080;
  margin-bottom: clamp(2px, 1vw, 4px);
`;

const ProjectName = styled.p`
  font-size: clamp(12px, 2.5vw, 16px);
  font-style: normal;
  color: #7D8080;
  margin-bottom: clamp(12px, 3vw, 16px);
`;

const Title = styled.h1`
  font-size: clamp(20px, 5vw, 24px);
  font-style: normal;
  font-weight: 600;
  color: #191A1A;
`;

const TeamImage = styled.img`
  width: clamp(120px, 40vw, 160px);
  height: clamp(120px, 40vw, 160px);
  border-radius: 50%;
  margin: clamp(16px, 5vw, 24px) auto;
  display: block;
  object-fit: cover;
`;

const DescriptionBox = styled.div`
  display: flex;
  width: 100%;
  max-width: 312px;
  padding: clamp(8px, 3vw, 12px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 12px;
  background: var(--GrayScale-Gray000, #F9FCFC);
  box-shadow: 0px 0px 13.1px 0px rgba(71, 178, 178, 0.13);

  color: var(--GrayScale-Gray800, #252626);
  font-family: Pretendard, sans-serif;
  font-size: clamp(14px, 3vw, 16px);
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  white-space: pre-line;
`;

const SubText = styled.p`
  font-size: clamp(12px, 2vw, 10px);
  color: #C8CCCC;
  font-style: normal;
  text-align: center;
  margin-top: clamp(16px, 4vw, 24px);    /* 위쪽 간격 추가 */
  margin-bottom: clamp(28px, 4vw, 32px); /* 기존 아래쪽 간격 유지 */
`;


const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-style: normal;
  width: 100%;
  max-width: 400px;
  margin-top: auto;
`;

const TeamIntro = () => {
  const handleInstagramClick = () => {
    window.open(
      "https://www.instagram.com/telltheworld.ai?igsh=bWY0aGtqamIzc2tw",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <Container>
      <TitleGroup>
        <School>서울여자대학교 2025-1</School>
        <ProjectName>바롬종합설계프로젝트 23분반</ProjectName>
        <Title>세상에알려조🌏</Title>
      </TitleGroup>

      <TeamImage src="/images/team_intro_character.svg" alt="팀 소개 이미지" />

      <DescriptionBox>
        우리는 매일 사용하는 AI 뒤에 숨겨진,
        보이지 않는 손을 세상에 알리기 위해 모인
        서울여자대학교 바롬종합설계프로젝트 23분반
        ‘세상에알려조’ 팀입니다.

        요즘 AI는 너무 자연스럽게 우리의 일상에
        녹아들고 있지만, 그 발전의 이면에는 열악한
        환경에서 일하는 미세 노동자들이 존재합니다.
        그들은 '이 일이 무엇인지도 모른 채'
        혐오 콘텐츠를 분류하고, 사진을 태그하며,
        우리의 '편리함'을 만들고 있습니다.

        우리는 이 프로젝트를 통해, 그들의 존재를
        가시화하고, 우리가 선택할 수 있는 윤리적
        소비의 방향을 함께 찾아가고자 합니다.
        “보이지 않는 사람들을 보는 것”
        그것이 우리의 시작입니다.
      </DescriptionBox>

      <SubText>
        송은선 박지원 장유정 정세영 정현주 윤채림</SubText>

      <ButtonWrapper>
        <Button onClick={handleInstagramClick}>인스타그램 바로가기</Button>
      </ButtonWrapper>
    </Container>
  );
};

export default TeamIntro;
