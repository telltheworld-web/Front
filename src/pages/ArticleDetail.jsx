import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import articles from "../data/articles";

const BlockContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2vh 4vw;
  box-sizing: border-box;
  background: linear-gradient(180deg, #F9FCFC 0%, #DAF2F2 100%);
`;

const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10000;
  padding: 0;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path
      d="M15 6L9 12L15 18"
      stroke="#47B2B2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CategoryTag = styled.p`
  color: #7D8080;
  font-family: 'Pretendard', sans-serif;
  font-size: clamp(14px, 4vw, 16px);
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 8px;
  white-space: pre; /* 줄바꿈 고정 */
`;

const Title = styled.h2`
  color: #191A1A;
  font-family: 'Pretendard', sans-serif;
  font-size: clamp(20px, 5vw, 24px);
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 12px;
  white-space: pre; /* 줄바꿈 고정 */
`;

const Image = styled.img`
  display: block;
  width: 80%;
  max-width: 240px;
  height: auto;
  aspect-ratio: 6 / 5;
  border-radius: 12px;
  margin: 32px auto;
  object-fit: cover;
`;

const ContentBox = styled.div`
  display: flex;
  width: 90%;
  max-width: 312px;
  padding: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: #F9FCFC;
  box-shadow: 0px 0px 13.1px 0px rgba(71, 178, 178, 0.13);
  margin: 0 auto 24px;
`;

const Content = styled.p`
  align-self: stretch;
  color: #252626;
  font-family: 'Pretendard', sans-serif;
  font-size: clamp(14px, 4vw, 16px);
  font-weight: 500;
  line-height: 1.5;
  white-space: pre-line; /* 줄바꿈 유지 */
`;

const Button = styled.button`
  display: flex;
  width: 90%;
  max-width: 312px;
  padding: 20px 0;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  border-radius: 12px;
  background: #47B2B2;
  box-shadow: 0px 0px 13.1px 0px rgba(71, 178, 178, 0.13);
  color: #F9FCFC;
  font-family: 'Pretendard', sans-serif;
  font-size: clamp(16px, 4vw, 18px);
  font-weight: 700;
  line-height: 21px;
  cursor: pointer;
  margin: 24px auto 0;
`;

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return (
      <BlockContainer>
        <p>기사를 찾을 수 없습니다.</p>
        <Button onClick={() => navigate("/articles")}>목록으로 돌아가기</Button>
      </BlockContainer>
    );
  }

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/articles");
    }
  };

  return (
    <BlockContainer>
      <BackButton onClick={handleBack}>
        <ChevronLeftIcon />
      </BackButton>
      <CategoryTag>{article.category}</CategoryTag>
      <Title>{article.title}</Title>
      <Image src={article.image} alt={article.title} />
      <ContentBox>
        <Content>{article.content}</Content>
      </ContentBox>
      <Button onClick={() => window.open(article.link, "_blank")}>기사 보러가기</Button>
    </BlockContainer>
  );
};

export default ArticleDetail;
