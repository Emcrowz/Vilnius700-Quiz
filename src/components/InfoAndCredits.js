import styles from "./InfoAndCredits.module.css";

const SPONSOR_VCB = "https://www.vcb.lt/";
const SOCIAL_GitHub = "https://github.com/Emcrowz";
const SOCIAL_LinkedIn =
  "https://www.linkedin.com/in/martynas-vrubliauskas-7309b224a";
const AUTHOR = "http://martynasvru.lt/";

function InfoAndCredits() {
  return (
    <div className={styles.infoBox}>
      <p>Projektas kuruotas ir dalinai remtas:</p>
      <div className={styles.sponsorBox}>
        <a href={SPONSOR_VCB} target="_blank">
          <img
            src={require(`../assets/VCB_Logo_no_bg.png`)}
            alt="Vilniaus miesto savivaldybės centrinė biblioteka logotipas"
          />
        </a>
      </div>

      <div className={styles.devCreditsBox}>
        <p>
          Web aplikaciją sukūrė <a href={"#"}>Martynas Vrubliauskas</a>
        </p>
      </div>
      <p>Saugoma autorinų teisių &copy; 2023 CC-BY</p>
    </div>
  );
}

export default InfoAndCredits;
