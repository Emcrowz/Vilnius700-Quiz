import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.appHeader}>
      <h2 className={styles.title}>Literatūrinė viktorina!</h2>
      {/* <img
        src={require(`../assets/VCB_Logo_no_bg.png`)}
        alt="Vilnius 700 logo"
      /> */}
    </header>
  );
}

export default Header;
