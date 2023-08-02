import styles from "./StartScreen.module.css";

function StartScreen({ topic, numQuestions, dispatch }) {
  return (
    <div className={styles.start}>
      <h2>Welcome to the quiz about {topic}!</h2>
      <h3>
        Our quiz contains {numQuestions} questions to see how good you know
        history and related information about {topic}!
      </h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>

      {/* <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "scoreboard" })}
      >
        {" "}
        Ladderboard
      </button> */}
    </div>
  );
}

export default StartScreen;
