import { useEffect, useReducer } from "react";

import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import QuizScreen from "./QuizScreen";

import "./_ComponentStyle.css";
import styles from "./App.module.css";
import InfoAndCredits from "./InfoAndCredits";

// Connection to Firebase.
const QUESTIONS_DEST =
  "https://vilnius700quiz-default-rtdb.europe-west1.firebasedatabase.app/questions.json";

// How many second will be needed for a question. Adds to
const SECS_PER_QUESTION = 6.5;

const initialState = {
  questions: [],
  // defined states, such as 'loading', 'finished' and etc.
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "home":
      return {
        ...state,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };
    case "countdown":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Action is unknown!");
  }
}

function App() {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  useEffect(function () {
    // If used as outside API. Then this part ought to be activated
    fetch(QUESTIONS_DEST)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));

    // Using the local data. For demonstration and testing purposes
    // dispatch({ type: "dataReceived", payload: QUESTIONS_LOCAL_DATA.questions });
  }, []);

  return (
    <div className={styles.app}>
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <>
            <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
            <Footer>
              <InfoAndCredits />
            </Footer>
          </>
        )}
        {status === "active" && (
          <QuizScreen>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer secondsRemaining={secondsRemaining} dispatch={dispatch} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQuestions={numQuestions}
              />
            </Footer>
          </QuizScreen>
        )}

        {status === "finished" && (
          <>
            <FinishScreen
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              highscore={highscore}
              dispatch={dispatch}
            />
            <Footer>
              <InfoAndCredits />
            </Footer>
          </>
        )}

        {/* {status === "results" && <ScoreBoard dispatch={dispatch} />} */}
      </Main>
    </div>
  );
}

export default App;
