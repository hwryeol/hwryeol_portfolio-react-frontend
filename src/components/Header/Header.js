import styles from "./Header.module.css"
function Header() {
  return (
    <>
    <header>
      <div id={styles.navigation}>
          <div id={styles.div}>INTRO</div>
          <div id={styles.div}>ABOUT</div>
          <div id={styles.div}>PROJECTs</div>
          <div id={styles.div}>SKILLS</div>
          <div id={styles.line}></div>
      </div>
    </header>
    </>
  );
};
export default Header;