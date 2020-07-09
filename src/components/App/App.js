import React from 'react';
import ItemList from '../ItemList';
import Footer from '../Footer';
import InputItem from '../InputItem';
import styles from './App.module.css';

const tasks = [
  {
    value: 'Сделать зарядку'
  },
  {
    value: 'Погулять с собакой'
  },
  {
    value: 'Приготовить завтрак'
  },
  {
    value: 'Работать-работать-работать'
  }
];

const App = () => (<div className={styles.wrap}>
  <h1 className={styles.title}>Важные дела</h1>
  <InputItem />
  <ItemList tasks={tasks}/>
  <Footer count={tasks.length}/>
</div>);

export default App;
