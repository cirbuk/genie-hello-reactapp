import React from 'react';
import { Route } from 'react-router-dom';
import styles from './Router.module.scss';
import FormPage from './pages/Form';
import CreativePage from './pages/Creative';

function App() {
  return (
    <div className={styles.App}>
      <Route exact path="/" component={FormPage} />
      <Route path="/creative" component={CreativePage} />
    </div>
  );
}

export default App;
