import React from 'react';
import styles from './Button.module.css';
const Button = (props) => {
  return (
    <button className={styles['btn']} type="sumit" onClick={props.onClick}>
      {props.title}
    </button>
  );
};
export default Button;
