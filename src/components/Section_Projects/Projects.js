import styles from "./Projects.module.css"
import image from "../../assets/img/사진.jpg"
import arrow from "../../assets/img/arrow.png"
import Frame from "./frame/frame"

function Projects() {
  return (
    <section className={styles.section} id="projects_section">
      <Frame />
    </section>
  );
};
export default Projects;