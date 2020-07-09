import React from 'react';
import Item from '../Item';

const ItemList = ({tasks}) => (<ul>
  <li><Item todo={tasks[0]} /></li>
  <li><Item todo={tasks[1]} /></li>
  <li><Item todo={tasks[2]} /></li>
  <li><Item todo={tasks[3]} /></li>
</ul>);

export default ItemList;
