import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const Container = styled.div`
  max-width: 375px;
  margin: 0 auto;
  padding: 24px 16px;
  background: linear-gradient(180deg, #F9FCFC 0%, #DAF2F2 100%);
  min-height: 100vh;
  box-sizing: border-box;
`;

const TitleGroup = styled.div`
  margin-bottom: 16px;
`;

const School = styled.p`
  font-size: 12px;
  color: #7D8080;
  margin-bottom: 4px;
`;

const ProjectName = styled.p`
  font-size: 12px;
  color: #7D8080;
  margin-bottom: 16px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: #191A1A;
`;

const TeamImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin: 24px auto;
  display: block;
`;

const DescriptionBox = styled.div`
  border: 2px dashed #C8CCCC;
  padding: 16px;
  font-size: 14px;
  line-height: 1.6;
  color: #252626;
  background-color: #fff;
  margin-bottom: 16px;
`;

const SubText = styled.p`
  font-size: 10px;
  color: #C8CCCC;
  text-align: center;
  margin-bottom: 24px;
`;

const TeamIntro = () => {
  return (
    <Container>
      <TitleGroup>
        <School>서울여자대학교 2025-1</School>
        <ProjectName>바롬종합설계프로젝트 23분반</ProjectName>
        <Title>세상에알려조🌏</Title>
      </TitleGroup>
      <TeamImage src="/images/team_intro_character.svg" alt="팀 소개 이미지" />
      <DescriptionBox>
        우리는 매일 사용하는 AI 뒤에 숨겨진,<br />
        보이지 않는 손을 세상에 알리기 위해 모인<br />
        서울여자대학교 바롬종합설계프로젝트 23분반<br />
        ‘세상에알려조’ 팀입니다.<br /><br />
        요즘 AI는 너무 자연스럽게 우리의 일상에  <br />
        녹아들고 있지만, 그 발전의 이면에는 열악한 <br />
        환경에서 일하는 미세 노동자들이 존재합니다.<br />
        그들은 '이 일이 무엇인지도 모른 채'<br />
        혐오 콘텐프를 분류하고, 사진을 태그하며,<br />
        우리의 '편리함'을 만들고 있습니다.<br /><br />
        우리는 이 프로젝트를 통해, 그들의 존재를<br />
        가시화하고, 우리가 선택할 수 있는 윤리적<br />
        소비의방향을 함께 찾아가고자 합니다. <br />
        “보이지 않는 사람들을 보는 것”<br />
        그것이 우리의 시작입니다.
      </DescriptionBox>
      <SubText>송은선 박지원 장유정 정세영 정현주 윤채림</SubText>
      <Button as="a" href="https://www.instagram.com/telltheworld.ai?igsh=Z3J6YzNvYzh6bjU4" target="_blank" rel="noopener noreferrer">
        인스타그램 바로가기
      </Button>
    </Container>
  );
};

export default TeamIntro;
