import React, { useEffect, useState } from "react";
import styles from "./ResponsiveImageGallery.module.css";

const ResponsiveImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17,18];

      const importPromises = data.map((el) =>
        import(`../../images/${el}.avif`).then((module) => module.default)
      );

      try {
        const imageModules = await Promise.all(importPromises);
        setImages(imageModules);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className={styles.grid_box}>
      {images.map((el, index) => (
        <div key={index}>
          <img src={el} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ResponsiveImageGallery;
