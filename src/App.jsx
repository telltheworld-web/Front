/*
import ArticleDetail from './pages/ArticleDetail';
import React from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import QuizStart from './pages/QuizStart';
import Quiz from './components/Quiz';
import QuizResult from './components/QuizResult';
import ArticleList from './pages/ArticleList';
import TeamIntro from './pages/TeamIntro';
import QuizFeedback from "./components/QuizFeedback";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

const MainContent = styled.div`
  flex: 1;
  width: 100%;
  padding: 60px 5vw 20px 5vw;
  box-sizing: border-box;
  max-width: 640px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 40px 4vw 20px 4vw;
  }
`;

const AppRoutes = () => {
  const location = useLocation();
  const hideSidebar = location.pathname.startsWith("/articles/");

  return (
    <Wrapper>
      {!hideSidebar && <Sidebar />}
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start" element={<QuizStart />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/quiz/:quizId/feedback/:optionId" element={<QuizFeedback />} />
          <Route path="/result" element={<QuizResult />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/team" element={<TeamIntro />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
        </Routes>
      </MainContent>
    </Wrapper>
  );
};

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
*/

<Route path="/quiz/:quizId/feedback/:optionId" element={<QuizFeedback />} />

import ArticleDetail from './pages/ArticleDetail';
import Certificate from './pages/Certificate'; // ✅ 인증서 페이지 import
import React from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import QuizStart from './pages/QuizStart';
import Quiz from './components/Quiz';
import QuizResult from './components/QuizResult';
import ArticleList from './pages/ArticleList';
import TeamIntro from './pages/TeamIntro';
import QuizFeedback from "./components/QuizFeedback";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

const MainContent = styled.div`
  flex: 1;
  width: 100%;
  padding: 60px 5vw 20px 5vw;
  box-sizing: border-box;
  max-width: 640px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 40px 4vw 20px 4vw;
  }
`;

const AppRoutes = () => {
  const location = useLocation();
  const hideSidebar = location.pathname.startsWith("/articles/");

  return (
    <Wrapper>
      {!hideSidebar && <Sidebar />}
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start" element={<QuizStart />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/quiz/:quizId/feedback/:optionId" element={<QuizFeedback />} />
          <Route path="/result" element={<QuizResult />} />
          <Route path="/certificate" element={<Certificate />} /> {/* ✅ 인증서 페이지 경로 추가 */}
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/team" element={<TeamIntro />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
        </Routes>
      </MainContent>
    </Wrapper>
  );
};

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
