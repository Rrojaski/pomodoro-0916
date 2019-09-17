import React from "react";
import styles from "./Text.module.scss";

const Text = props => {
  return (
    <span
      onClick={props.onClick}
      className={`${styles.Text} ${styles[props.size]} ${
        styles[props.className]
      }`}
    >
      {props.children}
    </span>
  );
};

export default Text;
