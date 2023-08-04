import styles from "./InfoAndCredits.module.css";

function InfoAndCredits() {
  return (
    <div className={styles.infoBox}>
      {/* <p>Placeholder for information and credit buttons!</p> */}

      <p>Project curated and partialy sponsored by:</p>
      <img
        src={require(`../assets/VCB_Logo_no_bg.png`)}
        alt="Vilniaus miesto savivaldybės centrinė biblioteka logotipas"
      />

      <p>Web application was made by Martynas Vrubliauskas @Emcrowz</p>
      <span>GitHub link/icon</span>
      <p>Copyrighted &copy; 2023 CC-BY</p>
    </div>
  );
}

export default InfoAndCredits;
