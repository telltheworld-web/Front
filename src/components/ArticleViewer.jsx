import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import articles from "../data/articles";


const ArticleViewer = () => {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const navigate = useNavigate();

  const filteredArticles =
    selectedCategory === "전체"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <Container>
      <Title>
        데이터 라벨링 관련 기사 <br />
        모아보기 📰
      </Title>
      <Subtitle>
        제3국의 데이터 라벨링 노동자와<br />
        데이터 라벨링에 대해 알아볼 수 있어요.
      </Subtitle>

      <CategoryBox>
        {["전체", "인권", "환경","가시화"].map((cat) => (
          <CategoryBtn
            key={cat}
            active={selectedCategory === cat}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </CategoryBtn>
        ))}
      </CategoryBox>

      <ArticleList>
        {filteredArticles.map(({ id, title, category,image }) => (
          <ArticleCard key={id} onClick={() => navigate(`/articles/${id}`)}>
            <Thumbnail src={image}/>
            <TextContent>
              <span>{category}</span>
              <h3>{title}</h3>
            </TextContent>
          </ArticleCard>
        ))}
      </ArticleList>
    </Container>
  );
};

export default ArticleViewer;

// ---------------- 스타일 컴포넌트 ----------------

const Container = styled.div`
  max-width: 375px;
  margin: auto;
  padding: 24px;
`;

const Title = styled.h2`
  margin-top: 35px;
  color: var(--GrayScale-Gray900, #191a1a);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  color: var(--GrayScale-Gray500, #7d8080);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 20px;
`;

const CategoryBox = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 23px;
`;

const CategoryBtn = styled.button`
  padding: 6px 12px;
  background: ${({ active }) => (active ? "#47B2B2" : "#EDF2F2")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const ArticleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ArticleCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  height: 93px;
  gap: 10px;
  border-radius: 12px;
  box-shadow: 0px 0px 13.1px 0px rgba(71, 178, 178, 0.13);
  cursor: pointer;
`;

const Thumbnail = styled.div`
  width: 80px;
  height: 61px;
  background: ${({ src }) => `url(${src})`} lightgray 50% / cover no-repeat;
  border-radius: 6px;
  flex-shrink: 0;
`;


const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  span {
    color: #7d8080;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 17px;
  }

  h3 {
    margin: 0;
    color: #252626;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 17px;
  }
`;

