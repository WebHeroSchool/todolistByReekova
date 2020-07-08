import React from 'react';

const ItemList = () => (<ul>
  <li>1.Сделать зарядку</li>
  <li>2.Погулять с собакой</li>
</ul>);

const title = (<h1> ToDoList for today </h1>);

const App = () => (<div>
  {title}
  <ItemList />
</div>);

export default App
