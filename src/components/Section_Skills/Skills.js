import styles from "./Skills.module.css"
import css_logo from "../../assets/img/CSS_LOGO.png"
import html_logo from "../../assets/img/HTML_LOGO.png"
import js_logo from "../../assets/img/JS_LOGO.png"
import react_logo from "../../assets/img/REACT_LOGO.png"
function Skill() {
  return (
    <section id={styles.section}>
    <table>
      <tr>
        <img className={styles.logo} src={css_logo}/>
      </tr>
      <tr>
        <td><img className={styles.logo} src={html_logo}/></td>
        <td>wrtwra</td>
      </tr>
      <tr>
        <img className={styles.logo} src={js_logo}/>
      </tr>
      <tr>
        <img className={styles.logo} src={react_logo}/>
      </tr>
    </table>
    </section>
  );
};
export default Skill;