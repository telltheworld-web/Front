import React from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const App = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Home />
    </Wrapper>
  );
};

export default App;