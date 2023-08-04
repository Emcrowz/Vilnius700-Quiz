import styles from "./FinishScreen.module.css";

function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  return (
    <div className={styles.resultBox}>
      <p className={styles.result}>
        Your score is: <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)} %)
      </p>
      {/* <p className={styles.highscore}>
        (Current highscore is: <span>{highscore}</span> points)
      </p> */}
      <p className={styles.highscore}>
        {points >= 10
          ? "Congratulations! Prize awaits you!"
          : "In order to win a prize you need to score 10 or more questions! Try again!"}
      </p>
      {/* 
        Use in order to collect data.
      <Form /> 
      */}
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Retake quiz
      </button>

      {/* <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "scoreboard" })}
      >
        Ladderboard
      </button> */}
    </div>
  );
}

export default FinishScreen;
