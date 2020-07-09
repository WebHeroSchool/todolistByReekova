import React from 'react';
import Item from '../Item';

const ItemList = ({ tasks }) => (<ul>{tasks.map(task => <li key={task.value}>
  <Item value={task.value} />
  </li>)}
</ul>);

export default ItemList;
