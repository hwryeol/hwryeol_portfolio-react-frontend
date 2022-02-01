import styles from "./Intro.module.css"
function Intro() {
  return (
    <section className={styles.section} id="intro_section">
      <div className={styles.contents}>
        <div className={styles.title}>
          포트폴리오
        </div>
        <div className={styles.description}>
          안녕하세요<br/>
          공부가 취미인 프론트엔드 개발자입니다.<br />
        </div>
      </div>
    </section>
  );
};
export default Intro;