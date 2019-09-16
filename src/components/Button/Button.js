import React from "react";
import styles from "./Button.module.scss";

const Button = props => {
  return (
    <a
      onClick={props.onClick}
      href={props.href}
      className={`${styles.Button} ${styles[props.className]} ${
        styles[props.type]
      } ${styles[props.color]} ${styles[props.mod]}`}
    >
      {props.children}
    </a>
  );
};

export default Button;
