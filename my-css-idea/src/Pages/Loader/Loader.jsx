import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.load}>
        <div className={styles.load2}>
          <div className={styles.load3}>
            <div className={styles.load4}></div>
          </div>
        </div>
      </div>

      <div className={styles.loaderBox}>
        <div className={styles.snake}></div>
        <div className={styles.food}></div>
      </div>

      <div className={styles.loader}>
        <div className={styles.loader2}>
          <div className={styles.loader3}>
            <div className={styles.loader4}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
