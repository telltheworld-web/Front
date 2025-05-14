import React, { useState } from "react";
import styled from "styled-components";

// 예시 기사 데이터
const articles = [
  {
    id: 1,
    category: "노동",
    title: "플랫폼 노동자도 데이터 라벨링을 하나?",
    summary: "플랫폼 노동자들이 AI를 위해 데이터를 정제하는 작업에 참여하고 있다.",
  },
  {
    id: 2,
    category: "아동",
    title: "어린이들도 데이터 라벨링 노동을 하고 있을까?",
    summary: "개도국에서는 아동이 데이터 분류 작업에 동원되기도 한다.",
  },
];

const ArticleViewer = () => {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const filteredArticles = selectedCategory === "전체"
    ? articles
    : articles.filter(article => article.category === selectedCategory);

    const Container = styled.div`
  max-width: 375px;
  margin: auto;
  padding: 24px;
  background: #F9FCFC;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

const CategoryBox = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
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
  gap: 12px;
`;

const ArticleCard = styled.div`
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background-color: #fff;

  h3 {
    margin: 0 0 6px 0;
    font-size: 16px;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #555;
  }
`;

  return (
    <Container>
      <Title>데이터 라벨링 관련 기사 모아보기</Title>
      <Subtitle>지금까지 어떤 사람들이 라벨링을 했을까요? 관련 기사들을 읽어보세요.</Subtitle>
      
      <CategoryBox>
        {["전체", "노동", "아동"].map((cat) => (
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
        {filteredArticles.map(({ id, title, summary }) => (
          <ArticleCard key={id}>
            <h3>{title}</h3>
            <p>{summary}</p>
          </ArticleCard>
        ))}
      </ArticleList>
    </Container>
  );
};

export default ArticleViewer;
