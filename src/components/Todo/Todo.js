import React, { useState, useEffect  } from 'react';
import ItemList from '../ItemList';
import Footer from '../Footer';
import InputItem from '../InputItem';
import styles from './App.module.css';


const App = () => {
  const initialState = {
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

  const [tasks, setTasks] = useState(initialState.tasks);

  useEffect(() => {
  		console.log('componentDidMount');
  	}, []);

  	useEffect(() => {
  		console.log('componentDidUpdate');
    });

  const onClickDone = id => {
    const newTasksList = tasks.map(task => {
      const newTask = { ...task };
      if (task.id === id) {
        newTask.isDone = !task.isDone;
      }
      return newTask;
    });
    setTasks(newTasksList);
  };

  const onClickDelete = id => {
    const newTasksList = tasks.filter(task => task.id !== id)
    setTasks(newTasksList);

}
  const onClickAdd = value => {
    const newTasksList = [
      ...tasks,
      {
        value,
        isDone: false,
        id: tasks.length + 1
      }
    ];
    setTasks(newTasksList);
  };

  return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>Важные дела</h1>
        <InputItem onClickAdd={onClickAdd}/>
        <ItemList tasks={tasks} onClickDone={onClickDone} onClickDelete={onClickDelete}/>
        <Footer count={tasks.length}/>
      </div>
  );
}

export default App;
