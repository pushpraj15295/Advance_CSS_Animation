import React from "react";
import styles from "./GhostText.module.css";

const GhostText = () => {
  return (
    <section className={styles.ghost_text}>
      <h2>
        <span>H</span>
        <span>I</span>
        <span>M</span>
        <span>A</span>
        <span>L</span>
        <span>A</span>
        <span>Y</span>
        <span>A</span>
        <span>N</span>
        {/* <span>L &nbsp;</span> */}
      </h2>
    </section>
  );
};

export default GhostText;
