import React from 'react';
import styles from './style.module.scss';
import genieDisplay from '../../icons/genie-hello.png';
import { useHistory, useLocation } from 'react-router-dom';

export default props => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const url = query.get('url');

  const history = useHistory();

  const generateAnother = () => {
    history.push('/form');
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.preview}>
            <img src={url ? url : genieDisplay} alt='Hello human image' />
            {!url ? <div className={styles.errorMessage}>Image Url not available!</div> : null}
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.row}>
            <h2 className={styles.h2}>Powered by kubric</h2>
            <button className={styles.button} onClick={generateAnother}>
              Make Another One
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
