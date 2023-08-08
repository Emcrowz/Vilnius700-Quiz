import styles from "./StartScreen.module.css";

function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className={styles.start}>
      <h2>Sveiki! Patikrinkime žinias apie Vilnių!</h2>
      <h3>
        Pateiksime <strong>{numQuestions}</strong> klausimus skirtus patikrinti
        Jūsų žinias apie Vilnių!
      </h3>
      <h2>Sėkmės!</h2>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Pradėti
      </button>
    </div>
  );
}

export default StartScreen;
