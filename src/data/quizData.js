const quizData = [
  {
    id: 1,
    question: "01. 등교하기 위해 버스에 오른 너는 포털 사이트의 추천 뉴스를 확인해. 이 뉴스는 어떻게 추천받을 수 있었던 걸까?",
    image: "/images/quiz_01.svg",
    type: "bubble",
    options: [
      {
        text: "AI가 알아서 인기 많은 걸로 추천",
        isCorrect: false,
        feedback: {
          title: "정답이 아니에요 😢",
          description: "AI는 당신의 클릭, 검색 기록, 머문 시간까지 수집하여 추천합니다...",
          image: "/images/incorrect_01.svg"
        }
      },
      {
        text: "지금까지 내가 본 뉴스들을 통해 추천",
        isCorrect: true,
        feedback: {
          title: "정답이에요 🎉",
          description: "AI는 당신의 클릭, 검색 기록 등을 바탕으로 추천합니다!",
          image: "/images/correct_01.svg"
        }
      }
    ]
  },
  {
    id: 2,
    question: "02. 수업 시간이 집중하기 싫은 너! 날이 따뜻해졌는데 여름 옷을 살펴볼까? AI는 어떻게 이 옷을 웃음 요소로 인식할 수 있는거지?",
    image: "/images/quiz_02.svg",
    type: "image-centered",
    options: [
      {
        text: "사람만 봐도 자동으로 판단할 수 있어",
        isCorrect: false,
        feedback: {
          title: "정답이 아니에요 😢",
          description: "AI는 시각만으로는 정확한 인식이 어렵습니다. 사람의 라벨링이 필요합니다.",
          image: "/images/incorrect_02.svg"
        }
      },
      {
        text: "사람들이 분류하는 거야",
        isCorrect: true,
        feedback: {
          title: "정답이에요 🎉",
          description: "AI는 학습을 위해 사람이 라벨링한 데이터를 사용합니다.",
          image: "/images/correct_02.svg"
        }
      }
    ]
  }
];

export default quizData;