import styles from "./Header.module.css"
function Header() {
  return (
    <>
    <header>
      <div id={styles.navigation}>
          <a id={styles.div} href="#intro_section">INTRO</a>
          <a id={styles.div} href="#about_section">ABOUT</a>
          <a id={styles.div} href="#skills_section">SKILLS</a>
          <a id={styles.div} href="#projects_section">PROJECTs</a>
      </div>
    </header>
    </>
  );
};
export default Header;