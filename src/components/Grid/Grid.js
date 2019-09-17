import React, { Fragment } from "react";

import styles from "./Grid.module.scss";

export const Row = props => {
  return (
    <Fragment>
      <div style={props.style} className={`${styles.Row} ${props.className}`}>
        {props.children}
      </div>
    </Fragment>
  );
};

export const Col = props => {
  return (
    <Fragment>
      <div className={`${styles.Col} ${styles[props.size]} ${styles[props.className]} ${props.className}`}>
        {props.children}
      </div>
    </Fragment>
  );
};

