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
            <video
              width="100%"
              autoPlay
              muted
              loop
              src="https://cdn.pixabay.com/vimeo/357512275/wireframe-26097.mp4?width=1280&hash=d9015a9c5a81b9acfab99db4d2f08eb6c2a77932"
            />
          </div>
          <div
            className={`${styles.side} ${styles.back}`}
            onClick={() => handleClick("fall season")}
          >
            <video
              width="100%"
              autoPlay
              muted
              loop
              src="https://cdn.pixabay.com/vimeo/357512275/wireframe-26097.mp4?width=1280&hash=d9015a9c5a81b9acfab99db4d2f08eb6c2a77932"
            />
          </div>
          <div
            className={`${styles.side} ${styles.right}`}
            onClick={() => handleClick("Winter season")}
          >
            <video
              width="100%"
              autoPlay
              muted
              loop
              src="https://cdn.pixabay.com/vimeo/357512275/wireframe-26097.mp4?width=1280&hash=d9015a9c5a81b9acfab99db4d2f08eb6c2a77932"
            />
          </div>
          <div
            className={`${styles.side} ${styles.left}`}
            onClick={() => handleClick("spring season")}
          >
            <video
              width="100%"
              autoPlay
              muted
              loop
              src="https://cdn.pixabay.com/vimeo/357512275/wireframe-26097.mp4?width=1280&hash=d9015a9c5a81b9acfab99db4d2f08eb6c2a77932"
            />
          </div>
          <div
            className={`${styles.side} ${styles.top}`}
            onClick={() => handleClick("rainy season")}
          >
            <video
              width="100%"
              autoPlay
              muted
              loop
              src="https://cdn.pixabay.com/vimeo/357512275/wireframe-26097.mp4?width=1280&hash=d9015a9c5a81b9acfab99db4d2f08eb6c2a77932"
            />
          </div>
          <div
            className={`${styles.side} ${styles.bottom}`}
            onClick={() => handleClick("This is your Land Earth")}
          >
            <video
              width="100%"
              autoPlay
              muted
              loop
              src="https://cdn.pixabay.com/vimeo/357512275/wireframe-26097.mp4?width=1280&hash=d9015a9c5a81b9acfab99db4d2f08eb6c2a77932"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RotatingCardOne;
