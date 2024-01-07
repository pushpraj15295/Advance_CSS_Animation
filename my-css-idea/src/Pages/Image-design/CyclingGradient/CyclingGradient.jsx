import React from "react";
import styles from "./Cycling.module.css";

const CyclingGradient = () => {
  return (
    <>
      <div class={styles.container}>
        <ul>
          <li>
            <a href="#">
              <span class={styles.menu_item}>
                <img
                  src="https://plus.unsplash.com/premium_photo-1700165319881-be0c22f14c77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </span>{" "}
              <span class={styles.menu_item_active}>
                <img
                  src="https://plus.unsplash.com/premium_photo-1701094771979-e4042ee524d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </span>
            </a>
          </li>

          <li>
            <a href="#">
              <span class={styles.menu_item}>
                {" "}
                <img
                  src="https://plus.unsplash.com/premium_photo-1700165319881-be0c22f14c77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </span>{" "}
              <span class={styles.menu_item_active}>
                {" "}
                <img
                  src="https://plus.unsplash.com/premium_photo-1701094771979-e4042ee524d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CyclingGradient;
