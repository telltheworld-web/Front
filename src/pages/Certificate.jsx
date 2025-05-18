
// import React from 'react';
// import styled, { createGlobalStyle } from 'styled-components';

// const GlobalStyle = createGlobalStyle`
// @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

// body {
//   margin: 0;
//   font-family: 'Pretendard', sans-serif;
// }
// `;

// const Container = styled.div`
//   width: 24rem; /* w-96 */
//   height: 640px;
//   position: relative;
//   background: linear-gradient(180deg, #F9FCFC 0%, #DAF2F2 100%); /* 기존 색상으로 변경 */
//   overflow: hidden;
// `;

// const Title = styled.div`
//   margin-top: 56px;
//   text-align: center;
//   color: #18181b; /* text-zinc-900 */
//   font-size: 1.5rem; /* text-2xl */
//   font-weight: 600;
//   line-height: 2rem;
// `;

// const Description = styled.div`
//   margin-top: 16px;
//   text-align: center;
//   color: #262626; /* text-neutral-800 */
//   font-size: 1rem;
//   font-weight: 500;
//   line-height: 1.5rem;
//   white-space: pre-line;
// `;

// const ImageWrapper = styled.div`
//   margin: 48px auto 0;
//   width: 15rem;
//   height: 12rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   & > img {
//     width: 13.3rem;
//     height: 16.6rem;
//     object-fit: contain;
//     transform: rotate(-11.36deg);
//   }
// `;

// const NameTag = styled.div`
//   margin: 40px auto 0;
//   background-color: #f9fafb;
//   padding: 0.25rem 0.75rem;
//   border-radius: 0.75rem;
//   display: inline-flex;
//   justify-content: center;
//   align-items: center;
//   gap: 0.625rem;
// `;

// const NameText = styled.div`
//   text-align: center;
//   color: #2dd4bf; /* text-teal-400 */
//   font-size: 1.25rem; /* text-xl */
//   font-weight: 600;
//   line-height: 2rem;
// `;

// const NameIcon = styled.div`
//   width: 2rem;
//   height: 2rem;
//   position: relative;

//   & > div {
//     width: 1.5rem;
//     height: 1.25rem;
//     position: absolute;
//     left: 5.33px;
//     top: 6.23px;
//     outline: 2.67px solid #2dd4bf;
//     outline-offset: -1.33px;
//   }
// `;

// const Subtitle = styled.div`
//   margin-top: 1rem;
//   text-align: center;
//   color: #262626;
//   font-size: 1rem;
//   font-weight: 500;
//   line-height: 1.5rem;
// `;

// const FooterNote = styled.div`
//   margin-top: 1.5rem;
//   text-align: center;
//   color: #71717a;
//   font-size: 0.75rem;
//   font-weight: 400;
//   line-height: 1rem;
//   white-space: pre-line;
// `;

// const Certificate = () => {
//   return (
//     <>
//       <GlobalStyle />
//       <Container>
//         <Title>퀴즈를 모두 해결했어요💡</Title>

//         <Description>
//           AI 뒤에 숨은 수많은 손길과{'\n'}데이터의 의미를 아는 당신
//           <br />
//           이제는 그냥 사용하지 않고, 한 번 더 생각하는
//           <br />
//           더 나은 세상을 향한 첫 걸음!
//         </Description>

//         <ImageWrapper>
//             <img src="/images/certificate.svg" alt="certificate" />
//         </ImageWrapper>


//         <NameTag>
//           <NameText>이름...</NameText>
//           <NameIcon>
//             <div />
//           </NameIcon>
//         </NameTag>

//         <Subtitle>더 나은 미래를 만드는 AI 소비자</Subtitle>

//         <FooterNote>
//           서울여자대학교 2025-1{'\n'}바롬종합설계프로젝트 23분반
//           <br />
//           [세상에알려조]
//         </FooterNote>
//       </Container>
//     </>
//   );
// };

// export default Certificate;


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
  width: 24rem; /* w-96 */
  height: 640px;
  position: relative;
  background: linear-gradient(180deg, #F9FCFC 0%, #DAF2F2 100%); /* 기존 색상으로 변경 */
  overflow: hidden;
`;

const Title = styled.div`
  margin-top: 56px;
  text-align: center;
  color: #18181b; /* text-zinc-900 */
  font-size: 1.5rem; /* text-2xl */
  font-weight: 600;
  line-height: 2rem;
`;

const Description = styled.div`
  margin-top: 16px;
  text-align: center;
  color: #262626; /* text-neutral-800 */
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  white-space: pre-line;
`;

const ImageWrapper = styled.div`
  margin: 48px auto 0;
  width: 15rem;
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 13.3rem;
    height: 16.6rem;
    object-fit: contain;
    transform: rotate(-11.36deg);
  }
`;
const NameTag = styled.div`
  margin: 16px auto 0;  // 이미지 아래 적당한 간격
  background-color: #f9fafb;
  padding: 12px 16px;    
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  max-width: 12rem;   // 너무 길어지지 않도록 제한
  position: relative;
`;

// const NameTag = styled.div`
//   margin: 40px auto 0;
//   background-color: #f9fafb;
//   padding: 0.25rem 0.75rem;
//   border-radius: 0.75rem;
//   display: inline-flex;
//   justify-content: center;
//   align-items: center;
//   gap: 0.625rem;
// `;

const NameText = styled.div`
  text-align: center;
  color: #2dd4bf; /* text-teal-400 */
  font-size: 1.25rem; /* text-xl */
  font-weight: 600;
  line-height: 2rem;
`;

// const NameIcon = styled.div`
//   width: 2rem;
//   height: 2rem;
//   position: relative;
  
//   & > div {
//     width: 1.5rem;
//     height: 1.25rem;
//     position: absolute;
//     left: 5.33px;
//     top: 6.23px;
//     outline: 2.67px solid #2dd4bf;
//     outline-offset: -1.33px;
//   }
// `;

const NameIcon = styled.div`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const NameInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-size: 1.25rem;
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
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 2rem;
  pointer-events: none;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.2s ease;
`;


const Subtitle = styled.div`
  margin-top: 1rem;
  text-align: center;
  color: #262626;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
`;

const FooterNote = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  color: #71717a;
  font-size: 0.75rem;
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
      
    const handleDownload = async () => {
      if (certificateRef.current) {
        const canvas = await html2canvas(certificateRef.current);
        const link = document.createElement('a');
        link.download = 'certificate.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
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

{/* 
        <NameTag>
          {savedName ? (
            <NameText>{savedName}</NameText>
          ) : (
            <>
              <input
                type="text"
                placeholder="이름 입력"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#2dd4bf',
                  textAlign: 'center',
                  maxWidth: '6rem'
                }}
              />
              <NameIcon onClick={handleSaveName}>
                 <img src="/images/pencil.svg" alt="name save" />
              </NameIcon>
            </>
          )}
        </NameTag> */}

{
     <NameTag>
     {savedName ? (
       <NameText>{savedName}</NameText>
     ) : (
       <>
         <PlaceholderText visible={!name}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이름입력</PlaceholderText>

         <NameInput
           ref={inputRef}
           value={name}
           onChange={(e) => setName(e.target.value)}
           onFocus={handleFocus}
           onKeyDown={handleKeyDown} // ✅ 엔터 감지
         />
         <NameIcon onClick={handleSaveName}>
           <img src="/images/pencil.svg" alt="이름 저장" />
         </NameIcon>
       </>
     )}
   </NameTag>

// <NameTag>
//   <PlaceholderText visible={!name}>  이름 입력</PlaceholderText>
//   <NameInput
//     ref={inputRef}
//     value={name}
//     onChange={(e) => setName(e.target.value)}
//     onFocus={handleFocus}
//   />
//   <NameIcon onClick={handleSaveName}>
//     <img src="/images/pencil.svg" alt="name save" />
//   </NameIcon>
// </NameTag>

}


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