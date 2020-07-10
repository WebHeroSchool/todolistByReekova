import React from 'react';
import Item from '../Item';
import styles from './ItemList.module.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


const ItemList = ({ tasks }) => (<ul classNmae={styles.container}>{tasks.map(task =>
  <li className={styles.list} key={task.value}>
  <FormControlLabel
       control={<Checkbox />}
       label=<Item value={task.value} isDone={task.isDone}
       color="primary"
       />
     />
  <DeleteOutlinedIcon />
  </li>)}
</ul>);

export default ItemList;
