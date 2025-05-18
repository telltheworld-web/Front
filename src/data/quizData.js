const quizData = [
  {
    id: 1,
    question: "01. 등교하기 위해 버스에 오른 너는 \n포털 사이트의 추천 뉴스를 확인해. \n이 뉴스는 어떻게 \n추천받을 수 있었던 걸까?",
    image: "/images/quiz_01.svg",
    type: "bubble",
    options: [
      {
        text: "AI가 알아서 인기 많은 걸로 추천",
        isCorrect: false,
        nextPath: "/quiz/1/feedback/left"
      },
      {
        text: "지금까지 내가 본 뉴스들을 통해 추천",
        isCorrect: true,
        nextPath: "/quiz/1/feedback/right"
      }
    ],
    feedback: {
      left: {
        title: "정답이 아니에요 🙅",
        description: "AI는 당신의 클릭, 검색 기록, 화면 멈춘 시간\n까지 수집해 학습해요. ‘그냥 똑똑한’ 게 아니라, \n사람들이 남긴 수많은 데이터를 보고 따라 배운\n 결과죠. 이건 자율주행, 추천 시스템, 챗봇까지 \n모든 AI에 해당돼요.",
        image: "/images/incorrect.svg",
        link: "/articles/1"
      },
      right: {
        title: "정답이에요 🙆",
        description: "AI는 당신의 클릭, 검색 기록, 화면 멈춘 시간\n까지 수집해 학습해요. ‘그냥 똑똑한’ 게 아니라, \n사람들이 남긴 수많은 데이터를 보고 따라 배운\n 결과죠. 이건 자율주행, 추천 시스템, 챗봇까지 \n모든 AI에 해당돼요.",
        image: "/images/correct.svg",
        link: "/articles/1"
      }
    }
  },
  {
    id: 2,
    question: "02. 수업 시간이 집중하기 싫은 너! \n날이 따뜻해졌는데 여름 옷을 살펴볼까? \nAI는 어떻게 이 옷을 여름 옷으로 \n인식할 수 있는거지?",
    image: "/images/quiz_02.svg",
    type: "image-centered",
    options: [
      {
        text: "사람만 봐도 자동으로 판단할 수 있어",
        isCorrect: false,
        nextPath: "/quiz/2/feedback/left"
      },
      {
        text: "사람들이 분류하는 거야",
        isCorrect: true,
        nextPath: "/quiz/2/feedback/right"
      }
    ],
    feedback: {
      left: {
        title: "정답이 아니에요 🙅",
        description: "AI가 보는 수많은 사진, 텍스트에는 ‘꼬리표’를 \n붙이는 사람들이 있어요. 그게 바로 데이터 라\n벨링이에요. AI가 이해할 수 있도록 데이터를 \n정리하는 작업은 주로 사람이 수행합니다.\n이를 데이터 라벨링이라고 하며, 이는 AI가 \n정확한 판단을 내리는 데 필수적입니다.",
        image: "/images/incorrect.svg",
        link: "http://localhost:5173/articles/2"
      },
      right: {
        title: "정답이에요 🙆",
        description: "AI가 보는 수많은 사진, 텍스트에는 ‘꼬리표’를 \n붙이는 사람들이 있어요. 그게 바로 데이터 라\n벨링이에요. AI가 이해할 수 있도록 데이터를 \n정리하는 작업은 주로 사람이 수행합니다.\n이를 데이터 라벨링이라고 하며, 이는 AI가 \n정확한 판단을 내리는 데 필수적입니다.",
        image: "/images/correct.svg",
        link: "http://localhost:5173/articles/2"
      }
    }
  },
  {
    id: 3,
    question: "03. 하루를 마치고 집에 돌아가는 너, \n숏폼 보면서 시간을 때우던 중... \n부적절한 콘텐츠로 가려진 걸 발견했다! \n이런 콘텐츠도 사람이 라벨링하나...?",
    image: "/images/quiz_03.svg",
    type: "image-centered",
    options: [
      {
        text: "설마 그럴리가",
        isCorrect: false,
        nextPath: "/quiz/3/feedback/left"
      },
      {
        text: "혐오 표현도 직접 라벨링하고 있어",
        isCorrect: true,
        nextPath: "/quiz/3/feedback/right"
      }
    ],
    feedback: {
      left: {
        title: "정답이 아니에요 🙅",
        description: "아직 AI는 혐오 콘텐츠를 완벽하게 인식하지\n못해, 사람이 직접 보고 분류하는 데이터 \n전 처리 작업이 필요합니다. 이로 인해 노동자\n들은 정신적인 스트레스를 겪기도 합니다.",
        image: "/images/incorrect.svg",
        link: "http://localhost:5173/articles/3"
      },
      right: {
        title: "정답이에요 🙆",
        description: "아직 AI는 혐오 콘텐츠를 완벽하게 인식하지\n못해, 사람이 직접 보고 분류하는 데이터 \n전 처리 작업이 필요합니다. 이로 인해 노동자\n들은 정신적인 스트레스를 겪기도 합니다.",
        image: "/images/correct.svg",
        link: "http://localhost:5173/articles/3"
      }
    }
  },
  {
    id: 4,
    question: "04. 고된 하루를 보내고 자기 위해 누운 너... \n문득 이런 생각을 해. \n그러면 라벨링은 누가 하고 있을까? \n그리고 그 사람들은 어떤 대우를 받을까?",
    image: "/images/quiz_04.svg",
    type: "image-centered",
    options: [
      {
        text: "전부 윤리적인 노동 환경에서 근로한다.",
        isCorrect: false,
        nextPath: "/quiz/4/feedback/left"
      },
      {
        text: "AI가 뭔지도 모른 채 일한다.",
        isCorrect: true,
        nextPath: "/quiz/4/feedback/right"
      }
    ],
    feedback: {
      left: {
        title: "정답이 아니에요 🙅",
        description: "AI가 보는 수많은 사진, 텍스트에는 ‘꼬리표’를 \n붙이는 사람들이 있어요. 그게 바로 데이터 라\n벨링이에요. AI가 이해할 수 있도록 데이터를 \n정리하는 작업은 주로 사람이 수행합니다.\n이를 데이터 라벨링이라고 하며, 이는 AI가 \n정확한 판단을 내리는 데 필수적입니다.",
        image: "/images/incorrect.svg",
        link: "http://localhost:5173/articles/4"
      },
      right: {
        title: "정답이에요 🙆",
        description: "AI가 보는 수많은 사진, 텍스트에는 ‘꼬리표’를 \n붙이는 사람들이 있어요. 그게 바로 데이터 라\n벨링이에요. AI가 이해할 수 있도록 데이터를 \n정리하는 작업은 주로 사람이 수행합니다.\n이를 데이터 라벨링이라고 하며, 이는 AI가 \n정확한 판단을 내리는 데 필수적입니다.",
        image: "/images/correct.svg",
        link: "http://localhost:5173/articles/4"
      }
    }
  }
];

export default quizData;

// const quizData = [
//   {
//     id: 1,
//     question: "01. 등교하기 위해 버스에 오른 너는 \n포털 사이트의 추천 뉴스를 확인해. \n이 뉴스는 어떻게 \n추천받을 수 있었던 걸까?",
//     image: "/images/quiz_01.svg",
//     type: "bubble",
//     options: [
//       {
//         text: "AI가 알아서 인기 많은 걸로 추천",
//         isCorrect: false,
//         nextPath: "/quiz/1/feedback/left"
//       },
//       {
//         text: "지금까지 내가 본 뉴스들을 통해 추천",
//         isCorrect: true,
//         nextPath: "/quiz/1/feedback/right"
//       }
//     ],
//     feedback: {
//       left: {
//         title: "정답이 아니에요 🙅",
//         description: "AI는 당신의 클릭, 검색 기록, 화면 멈춘 시간\n까지 수집해 학습해요. ‘그냥 똑똑한’ 게 아니라, \n사람들이 남긴 수많은 데이터를 보고 따라 배운\n 결과죠. 이건 자율주행, 추천 시스템, 챗봇까지 \n모든 AI에 해당돼요.",
//         image: "/images/incorrect.svg"
//       },
//       right: {
//         title: "정답이에요 🙆",
//         description: "AI는 당신의 클릭, 검색 기록, 화면 멈춘 시간\n까지 수집해 학습해요. ‘그냥 똑똑한’ 게 아니라, \n사람들이 남긴 수많은 데이터를 보고 따라 배운\n 결과죠. 이건 자율주행, 추천 시스템, 챗봇까지 \n모든 AI에 해당돼요.",
//         image: "/images/correct.svg"
//       }
//     }
//   },
//   {
//     id: 2,
//     question: "02. 수업 시간이 집중하기 싫은 너! \n날이 따뜻해졌는데 여름 옷을 살펴볼까? \nAI는 어떻게 이 옷을 여름 옷으로 \n인식할 수 있는거지?",
//     image: "/images/quiz_02.svg",
//     type: "image-centered",
//     options: [
//       {
//         text: "사람만 봐도 자동으로 판단할 수 있어",
//         isCorrect: false,
//         nextPath: "/quiz/2/feedback/left"
//       },
//       {
//         text: "사람들이 분류하는 거야",
//         isCorrect: true,
//         nextPath: "/quiz/2/feedback/right"
//       }
//     ],
//     feedback: {
//       left: {
//         title: "정답이 아니에요 🙅",
//         description: "AI가 보는 수많은 사진, 텍스트에는 ‘꼬리표’를 \n붙이는 사람들이 있어요. 그게 바로 데이터 라\n벨링이에요. AI가 이해할 수 있도록 데이터를 \n정리하는 작업은 주로 사람이 수행합니다.\n이를 데이터 라벨링이라고 하며, 이는 AI가 \n정확한 판단을 내리는 데 필수적입니다.",
//         image: "/images/incorrect.svg"
//       },
//       right: {
//         title: "정답이에요 🙆",
//         description: "AI가 보는 수많은 사진, 텍스트에는 ‘꼬리표’를 \n붙이는 사람들이 있어요. 그게 바로 데이터 라\n벨링이에요. AI가 이해할 수 있도록 데이터를 \n정리하는 작업은 주로 사람이 수행합니다.\n이를 데이터 라벨링이라고 하며, 이는 AI가 \n정확한 판단을 내리는 데 필수적입니다.",
//         image: "/images/correct.svg"
//       }
//     }
//   },
//   {
//     id: 3,
//     question: "03. 하루를 마치고 집에 돌아가는 너, \n숏폼 보면서 시간을 때우던 중... \n부적절한 콘텐츠로 가려진 걸 발견했다! \n이런 콘텐츠도 사람이 라벨링하나...?",
//     image: "/images/quiz_03.svg",
//     type: "image-centered",
//     options: [
//       {
//         text: "설마 그럴리가",
//         isCorrect: false,
//         nextPath: "/quiz/3/feedback/left"
//       },
//       {
//         text: "혐오 표현도 직접 라벨링하고 있어",
//         isCorrect: true,
//         nextPath: "/quiz/3/feedback/right"
//       }
//     ],
//     feedback: {
//       left: {
//         title: "정답이 아니에요 🙅",
//         description: "아직 AI는 혐오 콘텐츠를 완벽하게 인식하지\n못해, 사람이 직접 보고 분류하는 데이터 \n전 처리 작업이 필요합니다. 이로 인해 노동자\n들은 정신적인 스트레스를 겪기도 합니다.",
//         image: "/images/incorrect.svg"
//       },
//       right: {
//         title: "정답이에요 🙆",
//         description: "아직 AI는 혐오 콘텐츠를 완벽하게 인식하지\n못해, 사람이 직접 보고 분류하는 데이터 \n전 처리 작업이 필요합니다. 이로 인해 노동자\n들은 정신적인 스트레스를 겪기도 합니다.",
//         image: "/images/correct.svg"
//       }
//     }
//   },
//   {
//     id: 4,
//     question: "04. 고된 하루를 보내고 자기 위해 누운 너... \n문득 이런 생각을 해. \n그러면 라벨링은 누가 하고 있을까? \n그리고 그 사람들은 어떤 대우를 받을까?",
//     image: "/images/quiz_04.svg",
//     type: "image-centered",
//     options: [
//       {
//         text: "전부 윤리적인 노동 환경에서 근로한다.",
//         isCorrect: false,
//         nextPath: "/quiz/4/feedback/left"
//       },
//       {
//         text: "AI가 뭔지도 모른 채 일한다.",
//         isCorrect: true,
//         nextPath: "/quiz/4/feedback/right"
//       }
//     ],
//     feedback: {
//       left: {
//         title: "정답이 아니에요 🙅",
//         description: "AI가 보는 수많은 사진, 텍스트에는 ‘꼬리표’를 \n붙이는 사람들이 있어요. 그게 바로 데이터 라\n벨링이에요. AI가 이해할 수 있도록 데이터를 \n정리하는 작업은 주로 사람이 수행합니다.\n이를 데이터 라벨링이라고 하며, 이는 AI가 \n정확한 판단을 내리는 데 필수적입니다.",
//         image: "/images/incorrect.svg"
//       },
//       right: {
//         title: "정답이에요 🙆",
//         description: "AI가 보는 수많은 사진, 텍스트에는 ‘꼬리표’를 \n붙이는 사람들이 있어요. 그게 바로 데이터 라\n벨링이에요. AI가 이해할 수 있도록 데이터를 \n정리하는 작업은 주로 사람이 수행합니다.\n이를 데이터 라벨링이라고 하며, 이는 AI가 \n정확한 판단을 내리는 데 필수적입니다.",
//         image: "/images/correct.svg"
//       }
//     }
//   }
// ];

// export default quizData;