import React from 'react';
import ItemList from '../ItemList';
import Footer from '../Footer';
import InputItem from '../InputItem';
import styles from './App.module.css';


class App extends React.Component {
  state = {
    tasks: [
      {
        value: 'Сделать зарядку',
        isDone: false
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
    ]
  };

  render() {
    return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>Важные дела</h1>
        <InputItem />
        <ItemList tasks={this.state.tasks}/>
        <Footer count={this.state.tasks.length}/>
      </div>);
  }
}

export default App;
