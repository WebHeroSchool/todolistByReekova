import React from 'react';
import Proptypes from 'prop-types';
import ItemList from '../ItemList';
import Footer from '../Footer';
import InputItem from '../InputItem';
import styles from './App.module.css';


class App extends React.Component {
  state = {
    tasks: [
      {
        value: 'Сделать зарядку',
        isDone: true,
        id: 1
      },
      {
        value: 'Погулять с собакой',
        isDone: false,
        id: 2
      },
      {
        value: 'Приготовить завтрак',
        isDone: false,
        id: 3
      },
      {
        value: 'Работать-работать-работать',
        isDone: true,
        id: 4
      }
    ]
  };

  onClickDone = id => {
    const newTasksList = this.state.tasks.map(task => {
      const newTask = { ...task };
      if (task.id === id) {
        newTask.isDone = !task.isDone;
      }
      return newTask;
    });
    this.setState({ tasks: newTasksList });
  };

  onClickDelete = id => {this.setState(state => ({tasks: state.tasks.filter(task => task.id !== id)}))};

  onClickAdd = value => this.setState(state => ({
    tasks: [
      ...state.tasks,
      {value,
      isDone: false,
      id: state.tasks.length + 1
      }
    ],
  }));


  render() {
    return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>Важные дела</h1>
        <InputItem onClickAdd={this.onClickAdd}/>
        <ItemList tasks={this.state.tasks} onClickDone={this.onClickDone} onClickDelete={this.onClickDelete}/>
        <Footer count={this.state.tasks.length}/>
      </div>);
  }
}

App.propTypes = {
  tasks: Proptypes.array.isRequired,
  isDone: Proptypes.bool.isRequired,
  id: Proptypes.number.isRequired
}
export default App;
