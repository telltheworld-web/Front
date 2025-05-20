import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  max-width: 100%;
  margin: auto;
  padding: 40px 5vw 80px; /* 버튼과 겹치지 않도록 아래 padding */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  /* 세로 중앙 정렬 */
  text-align: center;
  background: linear-gradient(180deg, #F9FCFC 0%, #DAF2F2 100%);
  min-height: 100vh;
  box-sizing: border-box;
  position: relative; /* 혹시 모를 레이아웃 충돌 방지 */
`;


const Image = styled.img`
  width: clamp(160px, 48vw, 184px);
  height: auto;
  aspect-ratio: 4 / 5;
  flex-shrink: 0;
  margin-bottom: 24px;

  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Text = styled.p`
  color: var(--GrayScale-Gray800, #252626);
  text-align: center;
  width: 298px;
  font-family: Pretendard, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px; /* 150% */
  white-space: pre-line;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: clamp(24px, 5vw, 24px);
  font-weight: 700;
  margin-bottom: 24px;
  color: #191A1A;
`;

const StyledButton = styled.button`
  width: clamp(260px, 80vw, 312px);
  padding: 20px 0;
  border-radius: 12px;
  background: var(--Primary-Primary001, #47B2B2);
  box-shadow: 0px 0px 13.1px 0 rgba(71, 178, 178, 0.13);
  color: var(--GrayScale-Gray000, #F9FCFC);

  font-family: Pretendard, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  
  &:hover {
    background: #3aa0a0;
  }
`;

const QuizResult = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => setStep(step + 1);

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <>
            <Image src="../images/result_step1.svg" alt="step1" />
            <Text>
              {"\n"}
              네가 쓰는 인공지능 뒤에 숨어져 있던 사람들.{"\n"}
              그들도 자신의 권리를 위해 목소리를 내기{"\n"}
              시작했어. 일부 노동자들은 국제 NGO와{"\n"}
              연대해 실태를 폭로하고, AI 기업에 법적 책임{"\n"}
              을 묻는 운동을 시작했어.
            </Text>
            <StyledButton onClick={handleNext}>다음</StyledButton>
          </>
        );
      case 1:
        return (
          <>
            <Image src="../images/result_step2.svg" alt="step2" />
            <Text>
              {"\n"}
              내 안에는 수천 명의 손길이 있어.{"\n"}
              그 손길이 어떤 대우를 받았는지, 이제 너는 알게 됐어.{"\n"}
              너는... 이제 무엇을 할 수 있을까?
            </Text>
            <StyledButton onClick={handleNext}>알아보기</StyledButton>
          </>
        );
      case 2:
        return (
          <>
            <Title>축하합니다! 🎉</Title>
            <Text>
              당신은 ‘데이터 윤리 퀴즈’를 통해{"\n"}
              더 나은 세상을 향한 첫 걸음을 내디뎠어요.{"\n\n"}
              <Image src="../images/result_step3.svg" alt="step3" />
              인증서를 캡쳐하고{"\n"}
              Instagram 스토리를{"\n"}
              <strong>#데이터윤리퀴즈 #세상에알려조</strong> {"\n"}
              태그 후 업로드하면 이벤트 참여 완료!
            </Text>
            <StyledButton onClick={() => navigate('/certificate')}>인증서 받기</StyledButton>
          </>
        );
      default:
        return null;
    }
  };

  return <Wrapper>{renderStep()}</Wrapper>;
};

export default QuizResult;
