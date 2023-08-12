import styles from "./InfoAndCredits.module.css";

const SPONSOR_VCB = "https://www.vcb.lt/";
const AUTHOR = "https://martynasvru.lt/";

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
          Web aplikaciją adaptavo <a href={AUTHOR}>Martynas Vrubliauskas</a>
        </p>
      </div>
      <p>2023 &copy; CC-BY</p>
    </div>
  );
}

export default InfoAndCredits;
