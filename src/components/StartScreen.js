import styles from "./StartScreen.module.css";

function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className={styles.start}>
      {/* <h2>Patikrinkime Jūsų literatūrines žinias!</h2> */}
      <h3>
        Bus pateikti <strong>{numQuestions}</strong> klausimai skirti patikrinti
        Jūsų literatūrinėms žinioms!
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
