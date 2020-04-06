import React from 'react';
import { Route } from 'react-router-dom';
import styles from './Router.module.scss';
import HelloWorldPage from './pages/HelloWorld';


function App() {
  return (
    <div className={styles.App}>
      <Route exact path='/' component={HelloWorldPage} />
    </div>
  );
}

export default App;
