import React from 'react';
import Proptypes from 'prop-types';
import Item from '../Item/index.js';
import styles from './ItemList.module.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';



class ItemList extends React.Component {

    render(){
    const { tasks, onClickDone, onClickDelete, selectedMenuItem } = this.props;

    return(<ul className={styles.container}>{tasks.map(task =>
      <li className={styles.list} key={task.id}>
        <FormControlLabel
            control={
              <Checkbox
              checked={task.isDone}
              onClick={() => onClickDone(task.id)}
              />}
            label={<Item
            value={task.value}
            isDone={task.isDone}
            id={task.id}
            selectedMenuItem = {task.isDone}
            />}
          />
        <DeleteOutlinedIcon
          onClick={() => onClickDelete(task.id)}
        />
      </li>)}
    </ul>
  );
  }
}

ItemList.propTypes = {
  tasks: Proptypes.array.isRequired,
  onClickDone: Proptypes.func.isRequired,
  onClickDelete: Proptypes.func.isRequired
}

export default ItemList;
