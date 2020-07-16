import React from 'react';
import Proptypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = ({count}) => (<span className={styles.footer}>Осталось выполнить дел: {count}!</span>);

Footer.propTypes = {
  count: Proptypes.number.isRequired
}

export default Footer;
