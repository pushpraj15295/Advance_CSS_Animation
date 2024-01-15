import React from "react";
import styles from "./Loader.module.css";
import Watch from "../Watch/Watch";

const Loader = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.arc_loader}></div>
      <div className={styles.circle_dot_loader}>
        <div></div>
        <div></div>
      </div>
      <div className={styles.bubble_loader}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <Watch />

      <div className={styles.load}>
        <div className={styles.load2}>
          <div className={styles.load3}>
            <div className={styles.load4}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
