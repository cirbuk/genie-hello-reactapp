import React, { Fragment, useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Container from '../../components/Container';
import styles from './style.module.scss';
import { helloWorld } from '../../api';
import genieImage from '../../icons/genie.jpg';

export default () => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [bgColor, setBgColor] = useState('');

  const validation = () => {
    if (name.trim() === '' || color.trim() === '' || bgColor.trim() === '' ) {
      return false;
    }
    return true;
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const data = {
      name,
      color,
      bgColor
    };
    if (validation()) {
      const result = await helloWorld(data);
      console.log(result);
    } else {
      console.log("error - validation wrong");
    }
    
  };

  return (
    <Fragment>
      <Navbar />
      {/* <Container className={styles.container}> */}
        <h1 className={styles.heading}>Hello Human!</h1>
        <div className={styles.content}>
          <div className={styles.formContainer}>
            <div className={styles.preview}></div>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                {/* <label>Your Name</label> */}
                <input name='name' value={name} onChange={e => setName(e.target.value)} placeholder='Stanley Kubrick' />
              </div>
              <div className={styles.formGroup}>
                {/* <label>Text Color</label> */}
                <input name='color' value={color} onChange={e => setColor(e.target.value)} placeholder='#fff or white' />
              </div>
              <div className={styles.formGroup}>
                {/* <label>Background Color</label> */}
                <input name='bgColor' value={bgColor} onChange={e => setBgColor(e.target.value)} placeholder='#eee or black' />
              </div>
              <button>Save</button>
            </form>
          </div>
          <div className={styles.genie}>
            <img src={genieImage} alt='genie logo' />
          </div>
        </div>
      {/* </Container> */}
    </Fragment>
  );
};
