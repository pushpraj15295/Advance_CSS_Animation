import React from "react";
import styles from "./TailAnimation.module.css";

const TailAnimation = () => {
  return (
    <div className={styles.wrapper}>
      <div class={styles.main_circle_box}>
        <div></div>
      </div>
      <div class={styles.main_circle_box}>
        <div></div>
      </div>
      <div class={styles.main_circle_box}>
        <div></div>
      </div>
      <div class={styles.main_circle_box}>
        <div></div>
      </div>
      <div class={styles.main_circle_box}>
        <div></div>
      </div>
    </div>
  );
};

export default TailAnimation;
