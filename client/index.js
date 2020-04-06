import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './Index.module.scss';
import Router from './Router';

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById('root');
  if (!root) {
    root = document.createElement("div");
    document.body.appendChild(root);
  }
  ReactDOM.render(
    <BrowserRouter>
      <Router className={`${styles.body} ${styles.code}`} />
    </BrowserRouter>, root);
});


