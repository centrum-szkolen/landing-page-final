import React from 'react';
import styles from "./Button.module.css";

const Button = ({message}) => {
  return (
    <button className={styles.wrapper}>{message}</button>
  )
}

export default Button