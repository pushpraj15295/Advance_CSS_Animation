import React from "react";
import styles from "./BackVideoText.module.css";
import videoCp from "./videoCp.mp4"

const BackVideoText = () => {
  return (
    <div className={styles.Contain}>
    <section className={styles.sec}>
      <video  src={videoCp} autoPlay loop muted />
      <h2>
        Video in Text <br />
        Background
      </h2>
    </section>
    </div>
  );
};

export default BackVideoText;
