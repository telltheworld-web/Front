import React from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import QuizStart from './pages/QuizStart';
import Quiz from './components/Quiz';
import QuizResult from './components/QuizResult';
import ArticleList from './pages/ArticleList';
import TeamIntro from './pages/TeamIntro';
import QuizFeedback from "./components/QuizFeedback";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  max-width: 640px;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 60px 20px 20px 200px; // ← 좌측 padding은 Sidebar 너비만큼!
  max-width: 640px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding-left: 20px;
  }
`;

const App = () => (
  <Router>
    <Wrapper>
      <Sidebar />
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start" element={<QuizStart />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/quiz/:quizId/feedback/:optionId" element={<QuizFeedback />} />
          <Route path="/result" element={<QuizResult />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/team" element={<TeamIntro />} />
        </Routes>
      </MainContent>
    </Wrapper>
  </Router>
);

export default App;