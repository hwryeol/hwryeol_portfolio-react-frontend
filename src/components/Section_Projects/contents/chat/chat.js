import styles from "./chat.module.css"
import react from "react"

function Chat({myref}) {
  return (
        <div ref={myref} id={styles.chat}>
          <div className={styles.project}>
          </div>
          <div className={styles.description}>
          </div>

        </div>
  );
};
export default Chat;