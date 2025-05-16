import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 375px;
  margin: auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: linear-gradient(180deg, #F9FCFC 0%, #DAF2F2 100%);
  min-height: 100vh;
`;

const Image = styled.img`
  width: 180px;
  margin-bottom: 24px;
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 1.6;
  white-space: pre-line;
  color: #191A1A;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #191A1A;
`;

const Button = styled.button`
  width: 100%;
  max-width: 320px;
  padding: 16px;
  background-color: #47B2B2;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`;

const QuizResult = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => setStep(step + 1);

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <>
            <Image src="../images/result_step1.svg" alt="step1" />
            <Text>
              네가 쓰는 인공지능 뒤에 숨어져 있던 사람들.{"\n"}
              그들도 자신의 권리를 위해 목소리를 내기 시작했어.{"\n"}
              일부 노동자들은 국제 NGO와 연대해 실태를 폭로하고,{"\n"}
              AI 기업에 법적 책임을 묻는 운동을 시작했어.
            </Text>
            <Button onClick={handleNext}>다음</Button>
          </>
        );
      case 1:
        return (
          <>
            <Image src="../images/result_step2.svg" alt="step2" />
            <Text>
              내 안에는 수천 명의 손길이 있어.{"\n"}
              그 손길이 어떤 대우를 받았는지, 이제 너는 알게 됐어.{"\n"}
              너는... 이제 무엇을 할 수 있을까?
            </Text>
            <Button onClick={handleNext}>알아보기</Button>
          </>
        );
      case 2:
        return (
          <>
            <Title>축하합니다! 🎉</Title>
            <Text>
              당신은 ‘데이터 윤리 퀴즈’를 통해{"\n"}
              더 나은 세상을 향한 첫 걸음을 내디뎠어요.{"\n\n"}
              인증서를 캡쳐하고{"\n"}
              Instagram 스토리를{"\n"}
              <strong>#데이터윤리퀴즈 #세상에알려조</strong> {"\n"}
              태그 후 업로드하면 이벤트 참여 완료!
            </Text>
            <Image src="../images/result_step3.svg" alt="step3" />
            <Button onClick={() => alert("인증서 다운로드 준비 중입니다.")}>인증서 받기</Button>
          </>
        );
      default:
        return null;
    }
  };

  return <Wrapper>{renderStep()}</Wrapper>;
};

export default QuizResult;
