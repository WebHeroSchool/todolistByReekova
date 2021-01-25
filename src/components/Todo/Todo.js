import React, { useState, useEffect  } from 'react';
import CardContent from '@material-ui/core/CardContent';
import ItemList from '../ItemList';
import Footer from '../Footer';
import InputItem from '../InputItem';
import styles from './Todo.module.css';


const Todo = () => {
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
    ],
    selectedMenuItem: 'all'
  };

  const [tasks, setTasks] = useState(initialState.tasks);

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

  const allTasks = initialState.tasks;
  const completedTasks = initialState.tasks.filter(task => task.isDone === true);
  const uncompletedTasks = initialState.tasks.filter(task => task.isDone === false);

  let items;
    switch (initialState.selectedMenuItem) {
      case 'all':
        items = allTasks;
        break;
      case 'completedTasks':
        items = completedTasks;
        break;
      case 'uncompletedTasks':
        items = uncompletedTasks;
        break;
      default:
        items = allTasks;
    };

  return (
  <CardContent>
        <h2 className={styles.title}>Список моих дел</h2>
        <div className={styles.wrapper_title}>
          <span className={`${styles.title} ${styles.active}`}>Все дела</span>
          <button
                onClick={() => {
                  setTasks({
                    selectedMenuItem: 'uncompletedTasks',
                  });
                }} 
                className={styles.title}>
                  Незавершённые 
                  <span>
                    {uncompletedTasks.length}
                  </span>
                </button>
          <span className={styles.title}>Завершенные</span>
        </div>
        <InputItem onClickAdd={onClickAdd}/>
        <ItemList tasks={tasks} onClickDone={onClickDone} onClickDelete={onClickDelete} selectedMenuItem={initialState.selectedMenuItem} />
        <Footer count={tasks.length}/>
      </CardContent>
  );
}

export default Todo;
