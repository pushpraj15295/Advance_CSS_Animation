import React from "react";
import styles from "./RotatingCard1.module.css";

const RotatingCardOne = () => {
  const handleClick = (message) => {
    const speechSynthesis = window.speechSynthesis;
    const msg = new SpeechSynthesisUtterance();
    msg.text = message;
    speechSynthesis.speak(msg);
  };

  return (
    <>
      <p>Click My Side ------🔊</p>
      <div className={styles.cont}>
        <div className={styles.card}>
          <div
            className={`${styles.side} ${styles.front}`}
            onClick={() => handleClick("Summer season")}
          >
            <img
              src="https://images.unsplash.com/photo-1572246538688-3f326dca3951?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width="100%"
              height="100%"
            />
          </div>
          <div
            className={`${styles.side} ${styles.back}`}
            onClick={() => handleClick("fall season")}
          >
            <img
              src="https://images.unsplash.com/photo-1635193728400-98be5b62b3cf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="1"
              width="100%"
              height="100%"
            />
          </div>
          <div
            className={`${styles.side} ${styles.right}`}
            onClick={() => handleClick("Winter season")}
          >
            <img
              src="https://images.unsplash.com/photo-1551582045-6ec9c11d8697?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width="100%"
              height="100%"
            />
          </div>
          <div
            className={`${styles.side} ${styles.left}`}
            onClick={() => handleClick("spring season")}
          >
            <img
              src="https://images.unsplash.com/photo-1558172474-9c7c194c7d06?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="1"
              width="100%"
              height="100%"
            />
          </div>
          <div
            className={`${styles.side} ${styles.top}`}
            onClick={() => handleClick("rainy season")}
          >
            <img
              src="https://images.unsplash.com/photo-1431440869543-efaf3388c585?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="1"
              width="100%"
              height="100%"
            />
          </div>
          <div
            className={`${styles.side} ${styles.bottom}`}
            onClick={() => handleClick("This is your Land Earth")}
          >
            <img
              src="https://images.unsplash.com/photo-1591035043948-35c22d27b133?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="1"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RotatingCardOne;
