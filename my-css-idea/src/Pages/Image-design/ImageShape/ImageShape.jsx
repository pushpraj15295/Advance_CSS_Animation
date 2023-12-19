import React from "react";
import styles from "./ImageShape.module.css";

const ImageShape = () => {
  return (
    <div className={styles.main_cont}>
      {/* 2nd */}
      <div className={styles.secont_Image_cont}>
        <img
          src="https://images.unsplash.com/photo-1648413653877-ade5eefd2f1b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="111"
          className={styles.secont_Image}
        />
      </div>
      {/* 1st */}
      <div className={styles.first_Image_cont}>
        <img
          src="https://plus.unsplash.com/premium_photo-1671987556132-313d34dfa559?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="111"
          className={styles.first_Image}
        />
      </div>

      <div className={styles.third_Image_cont}>
        <img
          src="https://images.unsplash.com/photo-1673071995903-a58048023992?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
          alt="111"
          className={styles.third_Image}
        />
      </div>

      <div className={styles.forth_Image_cont}>
        <img
          src="https://images.unsplash.com/photo-1671795834293-87e575144cd3?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="111"
          className={styles.forth_Image}
        />
      </div>

      {/* 5 */}
      <div className={styles.fifth_Image_cont}>
        <img
          src="https://images.unsplash.com/photo-1574999656270-8e8753d1bb14?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="111"
          className={styles.fifth_Image}
        />
      </div>

       {/* 6th */}
     <div className={styles.sixth_Image_cont}>
     <img
        src="https://images.unsplash.com/photo-1581280445448-ab465a010046?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="111"
        className={styles.sixth_Image}
      />
     </div>
    </div>
  );
};

export default ImageShape;
