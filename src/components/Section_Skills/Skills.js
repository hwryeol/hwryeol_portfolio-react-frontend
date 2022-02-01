import styles from "./Skills.module.css"
import css_logo from "../../assets/img/CSS_LOGO.png"
import html_logo from "../../assets/img/HTML_LOGO.png"
import js_logo from "../../assets/img/JS_LOGO.png"
import react_logo from "../../assets/img/REACT_LOGO.png"
function Skill() {
  return (
    <section className={styles.section} id="skills_section">
    <div className={styles.container} id={styles.mainContainer}>
      <div className={styles.title}>MAIN</div>
      <img className={styles.item} src={html_logo}/>
      <img className={styles.item} src={css_logo}/>
      <img className={styles.item} src={js_logo}/>
      <img className={styles.item} src={react_logo}/>
    </div>
    <div className={styles.container} id={styles.subContainer}>
      <div className={styles.title}>SUB</div>
      <img className={styles.item} src={html_logo}/>
      <img className={styles.item} src={css_logo}/>
      <img className={styles.item} src={js_logo}/>
      <img className={styles.item} src={react_logo}/>
    </div>
    </section>
  );
};
export default Skill;