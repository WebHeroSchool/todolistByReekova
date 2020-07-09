import React from 'react';
import ItemList from '../ItemList';
import Footer from '../Footer';
import InputItem from '../InputItem';
import styles from './App.module.css';

const App = () => {
  const tasks = [
    {
      value: 'Сделать зарядку',
      isDone: true
    },
    {
      value: 'Погулять с собакой',
      isDone: true
    },
    {
      value: 'Приготовить завтрак',
      isDone: true
    },
    {
      value: 'Работать-работать-работать',
      isDone: false
    }
  ];

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Важные дела</h1>
      <InputItem />
      <ItemList tasks={tasks}/>
      <Footer count={tasks.length}/>
    </div>);
}

export default App;
