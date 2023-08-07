import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
      <p>Įkeliami klausimai...</p>
    </div>
  );
}
