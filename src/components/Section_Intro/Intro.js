import styles from "./Intro.module.css"
function Intro() {
  return (
    <section>
      <div id={styles.contents}>
        <div id="title">
          한원렬
        </div>
        <hr/>
        <div id={styles.description}>
          안녕하세요<br/>
          공부가 취미인 프론트엔드 개발자입니다.<br />
          만나서 반갑습니다<br />
        </div>
      </div>
    </section>
  );
};
export default Intro;