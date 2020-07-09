import React from 'react';
import Item from '../Item';

const ItemList = ({ tasks }) => (<ul>{tasks.map(task => <li key={task.value}>
  <Item value={task.value} isDone={task.isDone}/>
  </li>)}
</ul>);

export default ItemList;
