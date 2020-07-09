import React from 'react';
import ItemList from '../ItemList';
import Footer from '../Footer';
import InputItem from '../InputItem';

const tasks = [
  "Сделать зарядку",
  "Погулять с собакой",
  "Приготовить завтрак",
  "Работать-работать-работать"
];

const App = () => (<div>
  <h1>Важные дела</h1>
  <InputItem />
  <ItemList tasks={tasks}/>
  <Footer count={tasks.length}/>
</div>);

export default App;
