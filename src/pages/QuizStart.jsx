import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  max-width: 360px;
  margin: auto;
`;

const BackIcon = styled.div`
  align-self: flex-start;
  margin-bottom: 20px;
  cursor: pointer;
`;

const CharacterImage = styled.img`
  width: 160px;
  height: auto;
  margin: 20px 0;
`;

const Description = styled.p`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  text-align: center;
  line-height: 26px;
  color: #191A1A;

  span {
    font-weight: bold;
    color: #47B2B2;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 40px;
`;

const QuizStart = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <BackIcon onClick={() => navigate(-1)}>←</BackIcon>
      <CharacterImage src="/images/nova.png" alt="노바 캐릭터" />
      <Description>
        안녕👋 난 <span>노바(NOVA)</span>야.<br />
        내 몸은 네가 하루에 수도 없이 만나고 만들어내는 데이터들로 이루어져 있어.<br />
        나와 같은 일상 속 데이터들과 한번 만나보지 않을래?
      </Description>
      <ButtonWrapper>
        <Button onClick={() => navigate("/quiz/1")}>응 좋아!</Button>
      </ButtonWrapper>
    </Container>
  );
};

export default QuizStart;