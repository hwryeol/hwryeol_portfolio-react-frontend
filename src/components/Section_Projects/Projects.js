import styles from "./Projects.module.css"
import image from "../../assets/img/사진.jpg"

function Projects() {
  return (
    <section className={styles.section} id="projects_section">
      <div className={styles.contents}>
          <div className={styles.card} id="card1">
            <img src={image}/>
          </div>
          <div className={styles.card} id="card2">
            <img src={image}/>
          </div>
          <div className={styles.card} id="card3">
            <img src={image}/>
          </div>
      </div>
    </section>
  );
};
export default Projects;