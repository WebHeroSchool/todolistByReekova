import React from 'react';
import ItemList from '../ItemList';
import Footer from '../Footer';
import InputItem from '../InputItem';
import './App.css';

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

const App = () => (<div className="wrap">
  <h1 className="wrap__title">Важные дела</h1>
  <InputItem />
  <ItemList tasks={tasks}/>
  <Footer count={tasks.length}/>
</div>);

export default App;
