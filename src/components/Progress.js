import styles from "./Progress.module.css";

function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className={styles.progress}>
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Klausimas <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
