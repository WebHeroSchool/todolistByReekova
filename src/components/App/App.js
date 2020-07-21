import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';

import styles from './App.module.css';


const App = () => (
<Router>
  <div className={styles.wrap}>
    <Card className={styles.sidebar}>
      <MenuList>
        <Link to='/' exact className={styles.links}><MenuItem>About me</MenuItem></Link>
        <Link to='/todo' className={styles.links}><MenuItem>My tasks</MenuItem></Link>
        <Link to='/contacts' className={styles.links}><MenuItem>Contacts</MenuItem></Link>
      </MenuList>
    </ Card>

    <Card className={styles.content}>
      <Route path='/' exact component={About} />
      <Route path='/todo' component={Todo} />
      <Route path='/contacts' component={Contacts} />
    </Card>

  </div>
</Router> );

export default App;
