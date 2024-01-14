// Card3D.js

import React from "react";
import styles from "./Index.module.css";
import catImg from "../../../images/cat.avif";

const title = "Wellcome Card";
const description = "3d Card design";

const Card3D = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1704187508554-5f38dbbb3495?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Card Image"
            className={styles.cardImage}
            width={"100%"}
            height={"100%"}
          />
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription}>{description}</p>
          </div>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.card2}>
          <img
            src="https://plus.unsplash.com/premium_photo-1661599037294-02605790ce3e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Card Image"
            className={styles.cardImage}
            width={"100%"}
            height={"100%"}
          />
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle2}>{title}</h3>
            <p className={styles.cardDescription2}>{description}</p>
          </div>
        </div>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.card1}>
          <img
            src={catImg}
            alt="Card Image"
            className={styles.cardImage}
            width={"100%"}
            height={"100%"}
          />
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle1}>{title}</h3>
            <p className={styles.cardDescription1}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3D;
