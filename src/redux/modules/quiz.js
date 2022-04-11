// Actions

// 퀴즈 데이터 가져온다
const GET_QUIZ = "quiz/GET_QUIZ";
// 유저의 응답(퀴즈 답)을 추가한다
const ADD_ANSWER = "quiz/ADD_ANSWER";
// 응답을 초기화 해준다
const RESET_ANSWER = "quiz/RESET_ANSWER";

const initialState = {
  name: "손흥민",
  score_texts: {
    60: "앞으로 더 알아갈 필요가 있겠어!",
    80: "너에 대해 모든걸 더 알고싶어!!",
    100: "영혼의단짝!",
  },
  answers: [],
  quiz: [
    { question: "손흥민의 소속팀은 토트넘이다.", answer: "O" },
    { question: "손흥민의 프로데뷔년도는 2011년이다.", answer: "X" },
    { question: "현재 소속팀의 등번호 7번이다.", answer: "O" },
    { question: "저번시즌 17골 득점 기록을 보유하고있다.", answer: "O" },
    { question: "손흥민은 인싸다.", answer: "O" },
    // { question: "르탄이는 6살이다.", answer: "O" },
    // { question: "르탄이는 7살이다.", answer: "O" },
    // { question: "르탄이는 8살이다.", answer: "O" },
    // { question: "르탄이는 9살이다.", answer: "O" },
    // { question: "르탄이는 10살이다.", answer: "O" },
    // { question: "르탄이는 11살이다.", answer: "O" },
  ],
};

// Action Creators
export const getQuiz = (quiz_list) => {
  return { type: GET_QUIZ, quiz_list };
};

export const addAnswer = (answer) => {
  return { type: ADD_ANSWER, answer };
};

export const resetAnswer = () => {
  return { type: RESET_ANSWER };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "quiz/GET_QUIZ": {
      return { ...state, quiz: action.quiz_list };
    }

    case "quiz/ADD_ANSWER": {
      return { ...state, answers: [...state.answers, action.answer] };
    }

    case "quiz/RESET_ANSWER": {
      return {...state, answers: []};
    }

    default:
      return state;
  }
}