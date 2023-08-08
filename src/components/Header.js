import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.appHeader}>
      <img
        src={require(`../assets/VLN_700_BRANDMARK_Red.png`)}
        alt="Vilnius 700 logo"
      />
    </header>
  );
}

export default Header;
