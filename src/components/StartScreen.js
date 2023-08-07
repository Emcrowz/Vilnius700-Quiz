import styles from "./StartScreen.module.css";

function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className={styles.start}>
      <h2>Sveiki! Patikrinkime žinias apie Vilnių!</h2>
      <h3>
        Klausimyne yra <strong>{numQuestions}</strong> klausimai skirti
        patikrinti Jūsų žinioms apie Vilnių!
        <br />
        Sėkmės!
      </h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Pradėti
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
