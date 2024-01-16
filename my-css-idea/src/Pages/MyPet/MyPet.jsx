import React from "react";
import styles from "./MyPet.module.css";

const MyPet = () => {
  return (
    <div className={styles.mypet_box}>
      <div className={styles.dog}>
        <div className={styles.dog_body}>
          <div className={styles.dog_tail}>
            <div className={styles.dog_tail}>
              <div className={styles.dog_tail}>
                <div className={styles.dog_tail}>
                  <div className={styles.dog_tail}>
                    <div className={styles.dog_tail}>
                      <div className={styles.dog_tail}>
                        <div className={styles.dog_tail}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dog_torso}></div>
        <div className={styles.dog_head}>
          <div className={styles.dog_ears}>
            <div className={styles.dog_ear}></div>
            <div className={styles.dog_ear}></div>
          </div>
          <div className={styles.dog_eyes}>
            <div className={styles.dog_eye}></div>
            <div className={styles.dog_eye}></div>
          </div>
          <div className={styles.dog_muzzle}>
            <div className={styles.dog_tongue}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPet;
