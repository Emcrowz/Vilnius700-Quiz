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

// import questions_local from "../data/questions_other.json";
// const QUESTIONS_DEST = "http://localhost:8000/questions";

// Used solely for live demonstration. No external data fetching and API usage.
const QUESTIONS_LOCAL_DATA = {
  questions: [
    {
      question:
        "Kuriame amžiuje buvo pastatyta Vilniaus gynybinė siena, kurios žymiausia dalis dabar yra Aušros (Medininkų) vartai?",
      options: ["XVIa.", "XVIIa.", "XVIIIa.", "XIXa."],
      correctOption: 0,
      points: 1,
    },
    {
      question: "Kaip vadinamos garsiausios Vilniaus kapinės?",
      options: [
        "Aušros kapinės",
        "Ramybės kapinės",
        "Rasų kapinės",
        "Šviesos kapinės",
      ],
      correctOption: 2,
      points: 1,
    },
    {
      question:
        'Kurioje vietoje koncertus rengė Lady Gaga, Eltonas Johnas, Stingas, Robbie Williamsas, "Depeche Mode" ir daug kitų pasaulio muzikos žvaigždžių?',
      options: [
        "Kalnų parke",
        "Prie Baltojo tilto",
        "Vingio parke",
        '"Žalgirio" stadijone',
      ],
      correctOption: 2,
      points: 1,
    },
    {
      question: "Kuo Vilniui buvo žymūs 1860 metai?",
      options: [
        "Įvestas telefono ryšys",
        "Nutiestas geležinkelis",
        "Pastatyta pirmoji elektrinė",
        "Pradėjo veikti pirmasis popieriaus fabrikas",
      ],
      correctOption: 1,
      points: 1,
    },
    {
      question: "Kam 1985 metais buvo suteiktas Vilniaus pavadinimas?",
      options: [
        "Asteroidui",
        "Salai prie Madagaskaro",
        "Sporto arenai Bostone",
        "Viršukalnei Pamyro kalnuose",
      ],
      correctOption: 0,
      points: 1,
    },
    {
      question:
        "Apie kurią Vilniaus bažnyčią sklando legenda, kad Napoleonas sakė norįs nusinešti ją į Paryžių?",
      options: [
        "Šv. Jurgio",
        "Šv. Kazimiero",
        "Šv. Onos",
        "Šv. Petro ir Povilo",
      ],
      correctOption: 2,
      points: 1,
    },
    {
      question:
        "Kurioje gatvėje yra namas, kuriame 1918 metų vasario 16 dieną buvo paskelbtas Lietuvos Nepriklausomybės aktas?",
      options: [
        "Gedimino prospekte",
        "Pilies gatvėje",
        "Trakų gatvėje",
        "Vilniaus gatvėje",
      ],
      correctOption: 1,
      points: 1,
    },
    {
      question:
        "Kurioje Vilniaus vietoje 1987 metų rugpjūčio 23 dieną įvyko pirmasis nesankcionuotas antisovietinis mitingas Moloto-Ribentropo paktui pasmerkti?",
      options: [
        "Gedimino kalno papėdėje",
        "Prie Aušros vartų",
        "Prie buvusio KGB pastato",
        "Prie A. Mickevičiaus paminklo",
      ],
      correctOption: 3,
      points: 1,
    },
    {
      question:
        "1904 metais Vilniuje pradėtas leisti pirmasis lietuvių kalba ėjęs dienraštis, kurio redaktorius buvo Petras Vileišis. Koks buvo šio dienraščio pavadinimas?",
      options: [
        '"Laisvas žodis"',
        '"Lietuvos aušra"',
        '"Vakarinės naujienos"',
        '"Vilniaus žinios"',
      ],
      correctOption: 3,
      points: 1,
    },
    {
      question:
        "Kuris Lietuvos didysis kunigaikštis 1579 metais suteikė privilegiją įkurti Vilniaus universitetą?",
      options: [
        "Jonas Sobieskis",
        "Steponas Batoras",
        "Žygimantas Augustas",
        "Žygimantas Vaza",
      ],
      correctOption: 1,
      points: 1,
    },
    {
      question: "Kuris Lietuvos valdovas laikomas Vilniaus įkūrėju?",
      options: ["Gediminas", "Kęstutis", "Mindaugas", "Vytautas"],
      correctOption: 0,
      points: 1,
    },
    {
      question: "Kuriam architektūros stiliui priskiriama Vilniaus Katedra?",
      options: ["Barokui", "Gotikai", "Klasicizmui", "Renesansui"],
      correctOption: 2,
      points: 1,
    },
    {
      question: "Kuri Vilniaus bažnyčia laikoma seniausia?",
      options: ["Šv. Kazimiero", "Šv. Mikalojaus", "Šv. Onos", "Šv. Teresės"],
      correctOption: 1,
      points: 1,
    },
    {
      question:
        "Kaip vadinamas nuo 1995 metų Vilniuje rengiamas tarptautinis kino festivalis?",
      options: ["Kino pavasaris", "Kino ruduo", "Kino vasara", "Kino žiema"],
      correctOption: 0,
      points: 1,
    },
    {
      question:
        "1655 metais Vilnių pirmą kartą nuo įkūrimo užėmė svetimtaučiai. Kurios šalies kariuomenė plėšė ir niokojo Lietuvos sostinę?",
      options: ["Prūsijos", "Rusijos", "Švedijos", "Turkijos"],
      correctOption: 1,
      points: 1,
    },
    {
      question:
        "Pagrindinė Vilniaus gatvė Gedimino prospektu pavadinta 1989 metais. Anksčiau pavadinimas kelis kartus keistas. Kaip XX amžiuje nebuvo vadinamas dabartinis Gedimino prospektas?",
      options: [
        "Jogailos gatvė",
        "V. Lenino prospektas",
        "A. Mickevičiaus gatvė",
        "J. Stalino prospektas",
      ],
      correctOption: 0,
      points: 1,
    },
    {
      question: "Kuris Lietuvos valdovas perkėlė sostinę iš Trakų į Vilnių?",
      options: ["Mindaugas", "Vytenis", "Gediminas", "Vytautas"],
      correctOption: 2,
      points: 1,
    },
    {
      question:
        'Ar romanų "Vilniaus džiazas" ir "Vilniaus pokeris" autorius Ričardas Gavelis gimė Vilniuje?',
      options: ["Taip", "Ne"],
      correctOption: 0,
      points: 1,
    },
    {
      question:
        "Pilaitėje yra Imanuelio Kanto alėja. Kokį veikalą parašė šis Prūsijos filosofas?",
      options: [
        "Ten būti čia",
        "Traktatas apie žmogaus prigimtį",
        "Grynojo proto kritika",
        "Kapitalas",
      ],
      correctOption: 2,
      points: 1,
    },
    {
      question:
        "Fabijoniškėse 300 metrų gatvė pavadinta Juliaus Juzeliūno vardu. Kokios jis profesijos atstovas?",
      options: ["Skulptorius", "Inžinierius", "Poetas", "Kompozitorius"],
      correctOption: 3,
      points: 1,
    },
    {
      question: "Kas apsireiškė Gedimino sapne, kur buvo Vilniaus miestas?",
      options: [
        "Plieninis stumbras",
        "Geležinis vilkas",
        "Auksinė pelėda",
        "Sidabrinė varna",
      ],
      correctOption: 1,
      points: 1,
    },
    {
      question:
        "Kada pirmą kartą Vilniaus miestas buvo paminėtas rašitiniuose šaltiniuose?",
      options: ["1329m.", "1320m.", "1323m.", "1325m."],
      correctOption: 2,
      points: 1,
    },
  ],
};

// How many second will be needed for a question. Adds to
const SECS_PER_QUESTION = 3.5;

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
    // fetch(QUESTIONS_DEST)
    //   .then((res) => res.json())
    //   .then((data) => dispatch({ type: "dataReceived", payload: data }))
    //   .catch((err) => dispatch({ type: "dataFailed" }));

    // Using the local data. For demonstration and testing purposes
    dispatch({ type: "dataReceived", payload: QUESTIONS_LOCAL_DATA.questions });
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
