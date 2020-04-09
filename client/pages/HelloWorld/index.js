import React, { Fragment, useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Container from '../../components/Container';
import styles from './style.module.scss';
import { helloWorld } from '../../api';
import genieImage from '../../icons/genie.jpg';
import HelloHumanImage from '../../icons/genie-hello.png';

export default () => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [bgColor, setBgColor] = useState('');
  const [showPreview, setPreview] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [disableButton, setButton] = useState(true);

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
  },[name, color, bgColor]);

  const emptyForm = () => {
    setName('');
    setColor('');
    setBgColor('');
  }

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
        setPreviewImage(result.data);
        setPreview(true);
      } else {
        if (result.status === 500) {
          setErrorMessage("There's some problem. Please try again in a few hours");
        } else {
          setErrorMessage('Some Error occured');
        }

        setPreview(false);
      }
    } else {
      setErrorMessage("Please fill atleast one value");
    }
  };

  return (
    <Fragment>
      <Navbar />
      <h1 className={styles.heading}>Hello Human!</h1>
      <div className={styles.content}>
        <div className={`${styles.formContainer} ${showPreview ? styles.active : ''}`}>
          <div className={styles.flipCardInner}>
            {loading ? (
              <div className={styles.spinnerContainer}>
                <span className={styles.spinner}></span>
              </div>
            ) : null}
            <div className={`${styles.preview} ${styles.flipCardBack}`}>
              <img src={previewImage} alt='Hello human image' />
              <button
                onClick={e => {
                  emptyForm();
                  setPreview(false);
                }}>
                Generate Another
              </button>
            </div>
            <form onSubmit={handleSubmit} className={`${styles.form} ${styles.flipCardFront}`}>
              <div className={styles.formGroup}>
                <input name='name' value={name} onChange={e => setName(e.target.value)} placeholder='Human Name' />
              </div>
              <div className={styles.formGroup}>
                <input name='color' value={color} onChange={e => setColor(e.target.value)} placeholder='Text Color' />
              </div>
              <div className={styles.formGroup}>
                <input name='bgColor' value={bgColor} onChange={e => setBgColor(e.target.value)} placeholder='Background Color' />
              </div>
              <button disabled={disableButton ? true : false }>Save</button>

              {errorMessage === '' ? null : <div className={styles.errorMessage}>{errorMessage}</div>}
            </form>
          </div>
        </div>
        <div className={styles.genie}>
          <img src={genieImage} alt='genie logo' />
        </div>
      </div>
    </Fragment>
  );
};
