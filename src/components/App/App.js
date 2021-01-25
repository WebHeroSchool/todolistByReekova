import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';

import Todo from '../Todo/Todo';
import About from '../About/About';

import styles from './App.module.css';


const App = () => (
<Router>
  <div className={styles.wrap}>
    <Card className={styles.sidebar}>
        <div className={styles.logo}></div>
        <Link to='/' exact className={`${styles.links} ${styles.active}`}><MenuItem>About me</MenuItem></Link>
        <Link to='/todo' className={styles.links}><MenuItem>My tasks</MenuItem></Link>
    </ Card>

    <Card className={styles.content}>
      <Route path='/' exact component={About} />
      <Route path='/todo' component={Todo} />
    </Card>

  </div>
</Router> );

export default App;
