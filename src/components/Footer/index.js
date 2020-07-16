import React from 'react';
import styles from './Footer.module.css';

const Footer = ({count}) => (<span className={styles.footer}>Осталось выполнить дел: {count}!</span>);

Footer.defaultProps = {
  count: 0
}

export default Footer;
