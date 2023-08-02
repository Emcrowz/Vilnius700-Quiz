import styles from "./StartScreen.module.css";

function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className={styles.start}>
      <h2>Welcome to the Quiz!</h2>
      <h3>{numQuestions} questions to see how good you know...</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "scoreboard" })}
      >
        {" "}
        Ladderboard
      </button>
    </div>
  );
}

export default StartScreen;
