import styles from "./QuizScreen.module.css";

function QuizScreen({ children }) {
  return <div className={styles.quizScreen}>{children}</div>;
}

export default QuizScreen;
