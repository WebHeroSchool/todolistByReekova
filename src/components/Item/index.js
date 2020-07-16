import React from 'react';
import Proptypes from 'prop-types';
import classnames from 'classnames';
import styles from './Item.module.css';

const Item = ({ value, isDone }) => (<span className={
  classnames({
    [styles.item]: true,
    [styles.done]: isDone
  })
}>
{value}
</span>);

Item.defaultProps = {
  isDone: false
}

Item.propTypes = {
  isDone: Proptypes.bool.isRequired
}

export default Item;
