import React from 'react';
import styles from './style.module.scss';
import logo from '../../icons/kubric-logo.svg';

export default () => {
  return (  
    <div className={styles.navbar}>
      <div className={styles.navItem}>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
    </div>
  )
}