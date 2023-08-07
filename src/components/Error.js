import styles from "./Error.module.css";

function Error() {
  return (
    <p className={styles.error}>
      <span>💥</span> Nepavyko gauti duomenų.
    </p>
  );
}

export default Error;
