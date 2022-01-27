import styles from "./BgVideo.module.css"

function BgVideo({src}) {
  return (
      <video className={styles.bgVideo} autoPlay loop muted>
        <source src={src} type="video/mp4" />
      </video>
  );
}

export default BgVideo;
