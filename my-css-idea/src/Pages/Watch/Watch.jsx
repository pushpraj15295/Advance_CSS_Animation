import React, { useState, useEffect } from "react";
import styles from "./Watch.module.css";
import watchImg from "../../images/watch.png";

const Watch = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div
      className={styles.watch}
      style={{ backgroundImage: `url(${watchImg})` }}
    >
      <div
        className={`${styles.hand} ${styles.hour}`}
        style={{ transform: `rotate(${(hours % 12) * 30 + minutes / 2}deg)` }}
      ></div>
      <div
        className={`${styles.hand} ${styles.minute}`}
        style={{ transform: `rotate(${minutes * 6}deg)` }}
      ></div>
      <div
        className={`${styles.hand} ${styles.second}`}
        style={{ transform: `rotate(${seconds * 6}deg)` }}
      ></div>
    </div>
  );
};

export default Watch;
