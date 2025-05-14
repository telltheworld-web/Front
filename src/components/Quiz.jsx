import React, { useState } from "react";
import quizData from "../data/quizData";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 375px;
  margin: auto;
  padding: 40px 20px;
  background: linear-gradient(180deg, #F9FCFC 0%, #DAF2F2 100%);
`;

const Question = styled.h2`
  font-size: 20px;
  text-align: center;
  white-space: pre-line;
  margin-bottom: 24px;
`;

const OptionButton = styled.button`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border-radius: 10px;
  background: #47B2B2;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;

  &:hover {
    background: #3aa0a0;
  }
`;

const Feedback = styled.div`
  text-align: center;
  margin-top: 30px;
`;

const Image = styled.img`
  width: 200px;
  margin-bottom: 20px;
`;

const Bubble = styled.div`
  background: white;
  padding: 16px;
  border-radius: 16px;
  border: 2px solid #B7E5E5;
  margin-bottom: 20px;
  font-size: 16px;
`;

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const currentQuiz = quizData[currentStep];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowFeedback(true);
  };

  const handleNext = () => {
    setShowFeedback(false);
    setSelectedOption(null);
    if (currentStep < quizData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      alert("퀴즈 완료!");
    }
  };

  return (
    <Container>
      {!showFeedback ? (
        <>
          <Image src={currentQuiz.image} alt="quiz" />
          {currentQuiz.type === "bubble" ? (
            <Bubble>{currentQuiz.question}</Bubble>
          ) : (
            <Question>{currentQuiz.question}</Question>
          )}
          {currentQuiz.options.map((option, index) => (
            <OptionButton key={index} onClick={() => handleOptionClick(option)}>
              {option.text}
            </OptionButton>
          ))}
        </>
      ) : (
        <Feedback>
          <img src={selectedOption.feedback.image} alt="feedback" width="200" />
          <h3>{selectedOption.feedback.title}</h3>
          <p>{selectedOption.feedback.description}</p>
          <OptionButton onClick={handleNext}>다음</OptionButton>
        </Feedback>
      )}
    </Container>
  );
};

export default Quiz;
