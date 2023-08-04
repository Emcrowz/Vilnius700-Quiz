import styles from "./InfoAndCredits.module.css";

const SPONSOR_VCB = "https://www.vcb.lt/";
const SOCIAL_GitHub = "https://github.com/Emcrowz";
const SOCIAL_LinkedIn =
  "https://www.linkedin.com/in/martynas-vrubliauskas-7309b224a";

function InfoAndCredits() {
  return (
    <div className={styles.infoBox}>
      {/* <p>Placeholder for information and credit buttons!</p> */}

      <p>Project curated and partialy sponsored by:</p>
      <div className={styles.sponsorBox}>
        <a href={SPONSOR_VCB} target="_blank">
          <img
            src={require(`../assets/VCB_Logo_no_bg.png`)}
            alt="Vilniaus miesto savivaldybės centrinė biblioteka logotipas"
          />
        </a>
      </div>

      <div className={styles.devCreditsBox}>
        <p>Web application was made by Martynas Vrubliauskas @Emcrowz</p>

        <div className={styles.devSocialsBox}>
          <a href={SOCIAL_GitHub} target="_blank">
            <img src={require(`../assets/github.png`)} alt="GitHub link/icon" />
          </a>
          <a href={SOCIAL_LinkedIn} target="_blank">
            <img
              src={require(`../assets/linkedin-logo.png`)}
              alt="LinkedIn link/icon"
            />
          </a>
        </div>
      </div>
      <p>Copyrighted &copy; 2023 CC-BY</p>
    </div>
  );
}

export default InfoAndCredits;
