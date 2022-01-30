import styles from "./Header.module.css"
function Header() {
  return (
    <>
    <header>
      <div id={styles.navigation}>
          <a id={styles.div} href="#Intro">INTRO</a>
          <a id={styles.div}>ABOUT</a>
          <a id={styles.div}>SKILLS</a>
          <a id={styles.div}>PROJECTs</a>
      </div>
    </header>
    </>
  );
};
export default Header;