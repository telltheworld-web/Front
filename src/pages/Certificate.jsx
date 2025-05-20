import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

body {
  margin: 0;
  font-family: 'Pretendard', sans-serif;
}
`;

const Container = styled.div`
  width: clamp(20rem, 90vw, 24rem);
  height: clamp(540px, 90vh, 650px);
  position: relative;
  background: linear-gradient(180deg, #F9FCFC 0%, #DAF2F2 100%);
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 88px;
`;

const Title = styled.div`
  color: var(--GrayScale-Gray900, #191A1A);
  text-align: center;
  font-family: Pretendard;
  font-size: clamp(24px, 5vw, 24px);
  font-style: normal;
  font-weight: 600;
  line-height: 1.3;
`;

const Description = styled.div`
  margin-top: clamp(0.5rem, 2vw, 1rem);
  color: var(--GrayScale-Gray800, #252626);
  text-align: center;
  font-family: Pretendard;
  font-size: clamp(16px, 4vw, 16px);
  font-weight: 500;
  line-height: 1.5;
  white-space: pre-line;
`;

const ImageWrapper = styled.div`
  margin: clamp(1.5rem, 5vw, 3rem) auto 0;
  width: clamp(12rem, 50vw, 15rem);
  height: clamp(10rem, 40vw, 12rem);
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: clamp(11rem, 45vw, 13.3rem);
    height: clamp(14rem, 55vw, 16.6rem);
    object-fit: contain;
    transform: rotate(-11.36deg);
  }
`;

const NameTag = styled.div`
  margin: clamp(0.8rem, 3vw, 1.5rem) auto 0;
  background-color: #f9fafb;
  padding: clamp(0.5rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(0.4rem, 2vw, 0.625rem);
  max-width: 12rem;
  position: relative;
`;

const NameText = styled.div`
  text-align: center;
  color: #2dd4bf;
  font-size: clamp(1rem, 4vw, 1.25rem);
  font-weight: 600;
  line-height: 2rem;
`;

const NameIcon = styled.div`
  width: clamp(1.5rem, 5vw, 2rem);
  height: clamp(1.5rem, 5vw, 2rem);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    width: clamp(1rem, 4vw, 1.5rem);
    height: clamp(1rem, 4vw, 1.5rem);
  }
`;

const NameInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-size: clamp(1rem, 4vw, 1.25rem);
  font-weight: 600;
  color: #2dd4bf;
  text-align: center;
  max-width: 7rem;
  z-index: 1;

  &::placeholder {
    color: #a5f3fc;
  }
`;

const PlaceholderText = styled.span`
  position: absolute;
  left: 12px;
  color: #2dd4bf;
  font-size: clamp(1rem, 4vw, 1.25rem);
  font-weight: 600;
  line-height: 2rem;
  pointer-events: none;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.2s ease;
`;

const Subtitle = styled.div`
  margin-top: clamp(0.8rem, 2.5vw, 1rem);
  text-align: center;
  color: #262626;
  font-size: clamp(14px, 3.5vw, 16px);
  font-weight: 500;
  line-height: 1.5rem;
`;

const FooterNote = styled.div`
  margin-top: clamp(1rem, 4vw, 1.5rem);
  text-align: center;
  color: #71717a;
  font-size: clamp(10px, 3vw, 12px);
  font-weight: 400;
  line-height: 1rem;
  white-space: pre-line;
`;

const Certificate = () => {
  const inputRef = useRef(null);
  const [name, setName] = useState('');
  const [savedName, setSavedName] = useState('');
  const certificateRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.setSelectionRange(0, 0);
    }
  };

  const handleSaveName = () => {
    if (name.trim()) {
      setSavedName(name.trim());
      setTimeout(downloadCertificate, 100);
    }
  };

  const downloadCertificate = async () => {
    if (certificateRef.current) {
      const canvas = await html2canvas(certificateRef.current);
      const link = document.createElement('a');
      link.download = 'certificate.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSaveName();
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container ref={certificateRef}>
        <Title>퀴즈를 모두 해결했어요💡</Title>

        <Description>
          AI 뒤에 숨은 수많은 손길과{'\n'}데이터의 의미를 아는 당신
          <br />
          이제는 그냥 사용하지 않고, 한 번 더 생각하는
          <br />
          더 나은 세상을 향한 첫 걸음!
        </Description>

        <ImageWrapper>
          <img src="/images/certificate.svg" alt="certificate" />
        </ImageWrapper>

        <NameTag>
          {savedName ? (
            <NameText>{savedName}</NameText>
          ) : (
            <>
              <PlaceholderText visible={!name}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이름입력
              </PlaceholderText>
              <NameInput
                ref={inputRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={handleFocus}
                onKeyDown={handleKeyDown}
              />
              <NameIcon onClick={handleSaveName}>
                <img src="/images/pencil.svg" alt="이름 저장" />
              </NameIcon>
            </>
          )}
        </NameTag>

        <Subtitle>더 나은 미래를 만드는 AI 소비자</Subtitle>

        <FooterNote>
          서울여자대학교 2025-1{'\n'}바롬종합설계프로젝트 23분반
          <br />
          [세상에알려조]
        </FooterNote>
      </Container>
    </>
  );
};

export default Certificate;
