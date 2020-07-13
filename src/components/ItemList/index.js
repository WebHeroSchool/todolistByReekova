import React from 'react';
import Item from '../Item';
import styles from './ItemList.module.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


const ItemList = ({ tasks, isDone, onClickDone }) => (<ul className={styles.container}>{tasks.map(task =>
  <li className={styles.list} key={task.value}>
  <FormControlLabel
       control={
         <Checkbox
         onClick={() => onClickDone(task.isDone)}
         />}
       label=<Item value={task.value} isDone={task.isDone}
       />
     />
  <DeleteOutlinedIcon />
  </li>)}
</ul>);

export default ItemList;
