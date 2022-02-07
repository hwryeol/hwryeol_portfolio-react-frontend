import styles from "./Projects.module.css";
import image from "../../assets/img/사진.jpg";
import arrow from "../../assets/img/arrow.png";
import Chat from "./contents/chat/chat";
import Board from "./contents/board/board";
import {useState,useRef} from "react";


function Projects() {
  const myRef = useRef(null);
  const myRef2 = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  const executeScroll2 = () => myRef2.current.scrollIntoView();

  return (
    <section className={styles.section} id="projects_section">
    <a id={styles.left} onClick={executeScroll}><img id={styles.leftArrow} src={arrow}/></a>
    <div className={styles.contents}>
      <Chat myref={myRef}/>
      <Board myref={myRef2}/>
    </div>
    <a id={styles.right} onClick={executeScroll2}><img id={styles.rightArrow} src={arrow}/></a>
    </section>
  );
};
export default Projects;