import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import genieGif from '../../icons/genie.gif';
import { helloWorld } from '../../api';
import { useHistory } from 'react-router-dom';

export default () => {
  const [name, setName] = useState('Human');
  const [color, setColor] = useState('#4f4c4c');
  const [bgColor, setBgColor] = useState('#fffce6');
  const [previewImage, setPreviewImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [disableButton, setButton] = useState(true);

  const history = useHistory();

  const validation = () => {
    if (name.trim() === '' && color.trim() === '' && bgColor.trim() === '') {
      return false;
    }
    return true;
  };

  useEffect(() => {
    if (name.trim() === '' || color.trim() === '' || bgColor.trim() === '') {
      setButton(true);
    } else {
      setButton(false);
    }
  }, [name, color, bgColor]);

  const preFilledForm = () => {
    setName('Human');
    setColor('#4f4c4c');
    setBgColor('#fffce6');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = {
      name,
      color,
      bgColor
    };
    if (validation()) {
      setLoading(true);
      const result = await helloWorld(data);
      setLoading(false);
      if (result.status === 200) {
        history.push(`/creative?url=${result.data}`);
      } else {
        if (result.status === 500) {
          setErrorMessage("There's some problem. Please try again in a few hours");
        } else {
          setErrorMessage('Some Error occured');
        }
      }
    } else {
      setErrorMessage('Please fill atleast one value');
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.content}>
          {loading ? (
            <div className={styles.spinnerContainer}>
              <span className={styles.spinner}></span>
            </div>
          ) : null}
          <form onSubmit={handleSubmit} className={styles.form}>
            <h1 style={{ color: '#66DBE0' }}>hello</h1>
            <h1 style={{ color: '#fff' }}>human</h1>
            <p>Please appease me with these details</p>
            <div className={styles.formGroup}>
              <label>human name</label>
              <input name='name' value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label>text color</label>
                <input name='color' value={color} onChange={e => setColor(e.target.value)} />
              </div>
              <div className={styles.formGroup}>
                <label>bg color</label>
                <input name='bgColor' value={bgColor} onChange={e => setBgColor(e.target.value)} />
              </div>
            </div>
            <br />
            <button className={styles.button} disabled={disableButton ? true : false}>
              Bless the Genie
            </button>

            {errorMessage === '' ? null : <div className={styles.errorMessage}>{errorMessage}</div>}
          </form>
          <div className={styles.genie}>
            <img src={genieGif} alt='genie logo' />
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <h2 className={styles.footerItem}>Powered by kubric</h2>
        </div>
      </footer>
    </div>
  );
};
