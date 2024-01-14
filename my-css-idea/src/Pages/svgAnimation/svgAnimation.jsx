import React from "react";
import styles from "./svgAnimation.module.css"
const SvgAnimation = () => {
  return (
    <div className={styles.svg_container}>
      <svg viewBox="0 0 400 160">
        <text x= "50%" y="50%" dy=".32em" textAnchor="middle" className={styles.text_body}>
            Welcome
        </text>
        <text x= "50%" y="50%" dy=".32em" dx="2em" textAnchor="middle" className={styles.text_body}>
            .
        </text>
      </svg>
    </div>
  );
};

export default SvgAnimation;
