import styles from "./FinishScreen.module.css";

function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  return (
    <div className={styles.resultBox}>
      <p className={styles.result}>
        Your score is: <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)} %)
      </p>

      <p className={styles.highscore}>
        Ačiū, kad dalyvavote ir patikrinote savo žinias!
      </p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Iš naujo!
      </button>
    </div>
  );
}

export default FinishScreen;
