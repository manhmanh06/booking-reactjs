import React from 'react';
import styles from './Contact.module.css';
import Button from '../Button';
const Contact = () => {
  return (
    <div className={styles['home__form']}>
      <div className={styles['form__content']}>
        <h1>Save time,save money !</h1>
        <p>Sign up and we'll send the best deals to you</p>
        <div className={styles['form__control']}>
          <input type="text" placeholder="Your Email" />
          <Button title="Subscribe" />
        </div>
      </div>
    </div>
  );
};
export default Contact;
