import React from 'react';
import { Route } from 'react-router-dom';
import styles from './Router.module.scss';
import HelloWorldPage from './pages/HelloWorld';
import FormPage from './pages/Form';

function App() {
  return (
    <div className={styles.App}>
      <Route exact path='/' component={HelloWorldPage} />
      <Route exact path="/form" component={FormPage} />
    </div>
  );
}

export default App;
