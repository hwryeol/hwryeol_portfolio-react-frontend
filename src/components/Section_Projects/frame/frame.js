import styles from "./frame.module.css"
import arrow from "../../../assets/img/arrow.png"

function frame({Component}) {
  return (
        <>
            <a id={styles.left} href="#"><img id={styles.leftArrow} src={arrow}/></a>
            {Component}
            <a id={styles.right}href="#"><img id={styles.rightArrow} src={arrow}/></a>
        </>
  );
};
export default frame;