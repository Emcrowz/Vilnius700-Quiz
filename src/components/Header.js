import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.appHeader}>
      <img
        src={require(`../assets/VLN_700_BRANDMARK_Red.png`)}
        alt="Vilnius 700 logo"
      />
      {/* <h1>Vilnius 700</h1> */}
    </header>
  );
}

export default Header;
