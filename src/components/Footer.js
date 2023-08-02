import styles from "./Footer.module.css";

function Footer({ children }) {
  return <footer className={styles.footerBox}>{children}</footer>;
}

export default Footer;
