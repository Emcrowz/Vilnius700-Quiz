import { useEffect, useState } from "react";
import styles from "./ScoreBoard.module.css";

// function fetchScore(newData) {
//   return { ...scoreboard, newData };
// }

function ScoreBoard({ dispatch }) {
  const [scoreboard, setScoreboard] = useState([]);

  function handleScores(e) {
    setScoreboard(e);
  }

  useEffect(function () {
    fetch("http://localhost:8001/scoreboard")
      .then((res) => res.json())
      .then((data) => handleScores(data));
  }, []);

  return (
    <div className={styles.scoreBox}>
      {console.log(scoreboard)}
      <h2>Score board</h2>
      <ol>
        {scoreboard.map((elem) => (
          <li key={elem.id}>
            {elem.name} | {elem.email} | {elem.correctAnswers}
          </li>
        ))}
      </ol>
      <button className="btn btn-ui" onClick={() => dispatch({ type: "home" })}>
        Back to start
      </button>
    </div>
  );
}

export default ScoreBoard;
